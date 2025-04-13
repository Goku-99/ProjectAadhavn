const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const SHEET_ID = process.env.SHEET_ID;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
//  ***CRUCIAL:*** Correct newline handling
const PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');

async function addRowToSheet(name, email, phone, timestamp) {
  try {
    const auth = new JWT({
      email: CLIENT_EMAIL,
      key: PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    await auth.authorize();
    const doc = new GoogleSpreadsheet(SHEET_ID, auth);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({ name, email, phone, timestamp });
    console.log('Data saved to Google Sheet (locally)');
    return { success: true };
  } catch (error) {
    console.error('Error adding row:', error);
    return { success: false, error: 'Error saving data' };
  }
}

app.post('/submit-contact', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const timestamp = new Date().toISOString();
    const result = await addRowToSheet(name, email || '', phone || '', timestamp);

    if (result.success) {
      return res.status(200).json({ message: 'Data saved successfully' });
    } else {
      return res.status(500).json({ error: result.error });
    }
  } catch (error) {
    console.error('Error in /submit-contact:', error);
    return res.status(500).json({ error: 'Error processing request' });
  }
});

app.listen(port, () => {
  console.log(`Local server listening on port ${port}`);
});
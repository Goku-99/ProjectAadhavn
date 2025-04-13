const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    const { name, email, phone } = data;

    if (!name) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Name is required' }) };
    }

    const timestamp = new Date().toISOString();
    const row = { name, email: email || '', phone: phone || '', timestamp };

    //  **IMPORTANT:** Replace with your Google Sheet ID and credentials from environment variables
    const SHEET_ID = process.env.SHEET_ID;
    const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');  //  Handle newlines in Netlify

    const doc = new GoogleSpreadsheet(SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0]; // Assuming you want to use the first sheet
    await sheet.addRow(row);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data saved successfully' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error saving data' }),
    };
  }
};
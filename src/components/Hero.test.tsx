import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Hero } from './Hero';

test('renders Hero component with heading and image', () => {
  render(<Hero />);
  expect(screen.getByRole('heading', { name: /Aadhvan Shine/i })).toBeInTheDocument();
  expect(screen.getByAltText(/Aadhvan Shine - Luxury residential and retail development/i)).toBeInTheDocument();
});

test('renders the tagline', () => {
  render(<Hero />);
  expect(screen.getByText(/Luxury 3 BHK Living & Retail Spaces/i)).toBeInTheDocument();
});

test('renders the main image with correct src and alt text', () => {
  render(<Hero />);
  const mainImage = screen.getByAltText(/Aadhvan Shine - Luxury residential and retail development/i);
  expect(mainImage).toBeInTheDocument();
  expect(mainImage).toHaveAttribute('src', '/images/Exterior_Building_Middle_View_new.webp');
});

test('renders all navigation links with correct text, href, and data-section', () => {
  render(<Hero />);

  const lifestyleLink = screen.getByText(/Lifestyle/i);
  expect(lifestyleLink).toBeInTheDocument();
  expect(lifestyleLink).toHaveAttribute('href', '#lifestyle');
  expect(lifestyleLink).toHaveAttribute('data-section', 'lifestyle');

  const projectGalleryLink = screen.getByText(/Project Gallery/i);
  expect(projectGalleryLink).toBeInTheDocument();
  expect(projectGalleryLink).toHaveAttribute('href', '#project-gallery');
  expect(projectGalleryLink).toHaveAttribute('data-section', 'project-gallery');

  const specificationsLink = screen.getByText(/Specification/i);
  expect(specificationsLink).toBeInTheDocument();
  expect(specificationsLink).toHaveAttribute('href', '#specifications');
  expect(specificationsLink).toHaveAttribute('data-section', 'specifications');

  const contactUsLink = screen.getByText(/Contact Us/i);
  expect(contactUsLink).toBeInTheDocument();
 expect(contactUsLink).toHaveAttribute('href', '#contact-us');
 expect(contactUsLink).toHaveAttribute('data-section', 'contact-us');

 const downloadBrochureLink = screen.getByText(/Download Brochure/i);
 expect(downloadBrochureLink).toBeInTheDocument();
 expect(downloadBrochureLink).toHaveAttribute('href', '#contact-us'); // Assuming the href is #
 expect(downloadBrochureLink).toHaveAttribute('data-section', 'contact-us');
});

test('renders the Download Brochure button with correct text and attributes', () => {
 render(<Hero />);
 // Note: The Download Brochure element is a button with an anchor link functionality
 // We'll test for the link role or text content as appropriate

 // Find the link by text content
 const downloadBrochureLink = screen.getByRole('link', { name: /Download Brochure/i });
 expect(downloadBrochureLink).toBeInTheDocument();

 // Verify href and data-section attributes
 // Based on the latest state of Hero.tsx, this link is intended to trigger a scroll
 // and potentially other actions via the handleScrollToSection function.
 // Assuming the href is now set to match the data-section for consistency.
  expect(downloadBrochureLink).toHaveAttribute('href', '#contact-us');
 expect(downloadBrochureLink).toHaveAttribute('data-section', 'contact-us');
});


test('renders the Download Brochure link with correct text and href', () => {
  render(<Hero />);
  const downloadBrochureLink = screen.getByRole('link', { name: /Download Brochure/i }); // Use getByRole for link/button
  expect(downloadBrochureLink).toBeInTheDocument();
  // Assuming the Download Brochure link in Hero.tsx points directly to the PDF
  expect(downloadBrochureLink).toHaveAttribute('href', '#contact-us'); // Check against data-section as per previous changes
});
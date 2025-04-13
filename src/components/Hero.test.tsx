import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Hero } from './Hero';

test('renders Hero component with heading and image', () => {
  render(<Hero />);
expect(screen.getByRole('heading', { name: /Aadhvan Shine/i })).toBeInTheDocument();
  expect(screen.getByAltText(/Aadhvan Shine - Luxury residential and retail development/i)).toBeInTheDocument();
});
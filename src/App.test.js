import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Culture Connect text', () => {
  render(<App />);
  const elements = screen.getAllByText(/culture connect/i);
  expect(elements.length).toBeGreaterThan(0);
});
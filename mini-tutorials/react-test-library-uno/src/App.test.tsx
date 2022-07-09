import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText(/search:/i)).toBeInTheDocument();

  expect(screen.getByRole('textbox')).toBeInTheDocument();

  expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
  
  expect(screen.queryByText(/Searches for Javascript/)).toBeNull();

});

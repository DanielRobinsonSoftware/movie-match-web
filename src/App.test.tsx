import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders sign in button', () => {
  render(<App />);
  const elements = screen.getAllByText(/Sign in/i);
  const target = findButton(elements);
  expect(target).toBeInTheDocument();
});

test('renders sign up button', () => {
  render(<App />);
  const elements = screen.getAllByText(/Sign up/i);
  const target = findButton(elements);
  expect(target).toBeInTheDocument();
});

var findButton = elements => {
  return elements.find(element => element.nodeName.toLowerCase() === 'button');
};
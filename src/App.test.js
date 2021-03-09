import { render, screen } from '@testing-library/react';
import App from './App';
import {button, Modal} from "react-bootstrap"
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import { Init } from '../Init';

test('renders learn react link', () => {
  render(<Init />);
  const linkElement = screen.getByText(/LogIn/i);
  expect(linkElement).toBeInTheDocument();
});

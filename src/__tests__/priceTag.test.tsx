import { render, screen } from '@testing-library/react';
import { PriceTag } from '../components/cards/productCard/PriceTag';

test('renders price and discount correctly', () => {
  render(<PriceTag price={10} discount={5} />);

  const priceElement = screen.getByText(/€10/i);
  const discountElement = screen.getByText(/€5/i);

  expect(priceElement).toBeInTheDocument();
  expect(discountElement).toBeInTheDocument();
});

test('renders only price when there is no discount', () => {
  render(<PriceTag price={10} discount={0} />);

  const priceElement = screen.getByText(/€10/i);
  const discountElement = screen.queryByText(/€0/i);

  expect(priceElement).toBeInTheDocument();
  expect(discountElement).not.toBeInTheDocument();
});

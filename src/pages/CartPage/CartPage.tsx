import { useCart } from '../../hooks/useCart';
import { queryDiscounts } from '../../helpers/api/apiRoot';
import { useState } from 'react';
import { showToastMessage } from '../../helpers/showToastMessage';
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { SimpleInput } from '../../components/forms/inputs/SimpleInput';
import { EmptyCart } from '../../components/cart/emptyCart';
import { getInitialCartTotalPrice } from './utils/utils';
import { Link } from 'react-router-dom';

const priceDelim = 100;

export const CartPage = () => {
  const { updateQuantity, removeItemFromCart, cart, clearCart, applyDiscount } = useCart();
  const [discounts, setDiscounts] = useState<string>('');

  if (cart === null) return <ProgressBar />;
  if (cart.lineItems.length === 0) return <EmptyCart />;

  const initialPrice = getInitialCartTotalPrice(cart.lineItems);

  const discountHandler = async () => {
    const discountsList = (await queryDiscounts()).body.results;
    const currentDiscount = discountsList.find((discount) => discount.code === discounts);
    setDiscounts('');

    if (currentDiscount !== undefined) {
      await applyDiscount(cart.id, cart.version, currentDiscount.code);
      showToastMessage(`Promocode ${currentDiscount.code} applied!`, 'green');
      return;
    }
    showToastMessage('Invalid promocode', 'red');
  };

  return (
    <div className="mx-auto my-4 flex max-w-[45rem] flex-col gap-2 p-2">
      <Button
        size="small"
        onClick={() => {
          const confirm = window.confirm('Delete all items?');
          if (confirm) {
            clearCart(cart.id, cart.version, cart.lineItems).catch((e) => {
              Error(e);
            });
          }
        }}
        color="secondary"
        variant="text"
        className="self-end"
      >
        Clear Cart
      </Button>
      <ul className="flex flex-col gap-2">
        {cart.lineItems.map((item) => {
          const price =
            item.variant.prices?.[0].discounted !== undefined
              ? item.variant.prices?.[0].discounted?.value.centAmount
              : item.variant.prices?.[0].value.centAmount;
          if (price === undefined) throw new Error('Price is undefined');

          const normalizedPrice = price / priceDelim;

          return (
            <li
              key={item.id}
              className="grid grid-cols-5 grid-rows-2 items-center justify-items-center gap-2 rounded border p-2 text-sm shadow-md sm:grid-cols-7 sm:justify-items-end sm:gap-x-6"
            >
              <Link
                to={`/product/${item.productId}`}
                className="group col-span-4 row-span-2 flex w-full items-center justify-around gap-4 hover:text-secondary"
              >
                <img
                  src={item.variant.images?.[0].url}
                  alt={item.name['en-US']}
                  className="max-w-[7.5rem] rounded group-hover:opacity-75"
                />
                <p className="max-w-[7.5rem]">{item.name['en-US']}</p>
              </Link>
              <IconButton
                aria-label="delete"
                onClick={() => {
                  removeItemFromCart(cart.id, cart.version, item.id, item.quantity).catch((e) => {
                    Error(e);
                  });
                }}
                className="self-center hover:text-secondary sm:col-span-3"
              >
                <DeleteIcon />
              </IconButton>
              <div className="col-span-2 sm:col-span-1">
                Price:
                <p className="whitespace-nowrap font-bold">€ {normalizedPrice}</p>
              </div>
              <input
                className="h-10 w-16 rounded"
                type="number"
                value={item.quantity}
                onChange={(e) => {
                  updateQuantity({
                    cartId: cart.id,
                    cartVersion: cart.version,
                    lineItemId: item.id,
                    centAmount: item.variant.prices?.[0].value.centAmount as number,
                    quantity: parseInt(e.target.value)
                  }).catch((e) => {
                    Error(e);
                  });
                }}
                min={1}
              />
              <div className="col-span-2 sm:col-span-1">
                Subtotal:
                <p className=" whitespace-nowrap text-lg font-bold text-secondary">
                  € {item.quantity * normalizedPrice}
                </p>
              </div>
            </li>
          );
        })}
        <label
          htmlFor="discount"
          className="flex max-w-xs items-center gap-2"
        >
          <SimpleInput
            name="promocode"
            type="text"
            placeholder="Promocode"
            value={discounts}
            onChange={setDiscounts}
            onKeyDown={discountHandler}
          />
          <Button
            size="small"
            color="secondary"
            variant="text"
            onClick={() => {
              discountHandler().catch((e) => {
                Error(e);
              });
            }}
          >
            Apply
          </Button>
        </label>
        <p className="self-end text-2xl font-bold text-secondary">
          <span className="font-normal text-black">Total price:</span> €{' '}
          {cart.totalPrice.centAmount / priceDelim}{' '}
          {cart.discountCodes.length > 0 && (
            <span className="text-sm text-gray-500 line-through">{initialPrice / priceDelim}</span>
          )}
        </p>
      </ul>
    </div>
  );
};

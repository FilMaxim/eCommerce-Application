import { getNormalizedNumber } from '../catalogPage/utils/getNormalizedNumber';
import { Link } from 'react-router-dom';
import { NavRoutes } from '../../utils/routes';
import { useCart } from '../../hooks/useCart';
import { queryDiscounts } from '../../helpers/api/apiRoot';
import { useState } from 'react';
import { showToastMessage } from '../../helpers/showToastMessage';
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
import Button from '@mui/material/Button';
import bender from '../../assets/cart-bender.png';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const EmptyCart = () => {
  return (
    <div className="m-auto mt-[5vh] flex max-w-[42rem] flex-col items-center justify-center gap-2 p-2">
      <img
        src={bender}
        alt="scaried robot"
        width={200}
        height={200}
      />
      <p className="text-center text-lg">Cart is empty...</p>
      <Link
        className="text-secondary hover:text-red-800"
        to={NavRoutes.catalogPage}
      >
        <Button
          variant="contained"
          color="secondary"
        >
          Catalog
        </Button>
      </Link>
    </div>
  );
};

export const CartPage = () => {
  const { updateQuantity, removeItemFromCart, cart, clearCart, applyDiscount } = useCart();
  const [discounts, setDiscounts] = useState<string>('');

  if (cart === null) return <ProgressBar />;
  if (cart.lineItems.length === 0) return <EmptyCart />;

  const initialPrice = cart.lineItems.reduce((acc, item) => {
    return acc + item.price.value.centAmount * item.quantity;
  }, 0);

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
    <div className="m-auto mt-4 flex max-w-[45rem] flex-col gap-2 p-2">
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
        variant="outlined"
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
          const normalizedPrice = getNormalizedNumber(price as number, 100);

          return (
            <li
              key={item.id}
              className="grid grid-cols-5 grid-rows-2 items-center justify-items-center gap-2 rounded border p-2 text-sm shadow-md sm:grid-cols-7 sm:justify-items-end sm:gap-x-6"
            >
              <img
                src={item.variant.images?.[0].url}
                alt={item.name['en-US']}
                className="col-span-2 row-span-2 max-w-[7.5rem] rounded object-contain sm:mr-8"
              />
              <p className="col-span-2 row-span-2 w-[8rem] sm:mr-8">{item.name['en-US']}</p>
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
          className="grid max-w-xs grid-cols-5"
        >
          <span className="col-span-2">Promocode:</span>
          <input
            className="col-span-4"
            name="discount"
            type="text"
            value={discounts}
            onChange={(e) => {
              setDiscounts(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                discountHandler().catch((e) => {
                  Error(e);
                });
              }
            }}
          />
          <button
            className="col-span-1"
            onClick={() => {
              discountHandler().catch((e) => {
                Error(e);
              });
            }}
          >
            Apply
          </button>
        </label>
        <p className="self-end text-2xl">
          Total price: {cart.totalPrice.centAmount / 100}{' '}
          {cart.discountCodes.length > 0 && (
            <span className="text-sm text-gray-500 line-through">{initialPrice / 100}</span>
          )}
        </p>
      </ul>
    </div>
  );
};

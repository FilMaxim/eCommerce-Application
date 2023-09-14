import { getNormalizedNumber } from '../catalogPage/utils/getNormalizedNumber';
import { Link } from 'react-router-dom';
import { NavRoutes } from '../../utils/routes';
import { useCart } from '../../hooks/useCart';
import { queryDiscounts } from '../../helpers/api/apiRoot';
import { useState } from 'react';
import { showToastMessage } from '../../helpers/showToastMessage';
import { StatusCodes } from '../../utils/statusCodes';

export const CartPage = () => {
  const { addToCart, updateQuantity, removeItemFromCart, cart, clearCart, applyDiscount } = useCart();
  const [discounts, setDiscounts] = useState<string>('');

  if (cart === null) return <p className="text-center text-lg">Loading...</p>;

  const initialPrice = cart.lineItems.reduce((acc, item) => {
    return acc + item.price.value.centAmount * item.quantity;
  }, 0);
  // const discount = 100 - ((initialPrice / (cart?.totalPrice.centAmount ?? 0)) * 100);

  if (cart.lineItems.length === 0) {
    return (
      <>
        <button
          className="bordder p-2"
          onClick={() => {
            addToCart({
              cartId: cart.id,
              cartVersion: cart.version,
              productId: '56aa4cae-7f6f-41cb-b65e-1e69e9d33284'
            }).catch((e) => {
              Error(e);
            });
          }}
        >
          add Item
        </button>
        <p className="text-center text-lg">Cart is empty..</p>
        <Link
          className="text-secondary hover:text-red-800"
          to={NavRoutes.catalogPage}
        >
          Go to catalog
        </Link>
      </>
    );
  }

  const discountHandler = async () => {
    const discountsList = (await queryDiscounts()).body.results;
    const currentDiscount = discountsList.find((discount) => discount.code === discounts);
    setDiscounts('');
    if (currentDiscount !== undefined) {
      const status = await applyDiscount(cart.id, cart.version, currentDiscount.code);
      status === StatusCodes.OK
        ? showToastMessage(`Promocode ${currentDiscount.code} applied!`, 'green')
        : showToastMessage('Invalid promocode', 'red');
      return;
    }
    showToastMessage('Invalid promocode', 'red');
  };

  return (
    <div className="m-auto mt-4 max-w-[42rem] rounded border p-2">
      <div className="mb-1 flex justify-between">
        <button
          className="border p-2"
          onClick={() => {
            addToCart({
              cartId: cart.id,
              cartVersion: cart.version,
              productId: '56aa4cae-7f6f-41cb-b65e-1e69e9d33284'
            }).catch((e) => {
              Error(e);
            });
          }}
        >
          add Item
        </button>
        <button
          className="border p-2"
          onClick={() => {
            const confirm = window.confirm('Delete all items?');
            if (confirm) {
              clearCart(cart.id, cart.version, cart.lineItems).catch((e) => {
                Error(e);
              });
            }
          }}
        >
          Clear Cart
        </button>
      </div>
      {cart !== null && (
        <div className="flex flex-col gap-2">
          {cart.lineItems.map((item) => {
            const price =
              item.variant.prices?.[0].discounted !== undefined
                ? item.variant.prices?.[0].discounted?.value.centAmount
                : item.variant.prices?.[0].value.centAmount;
            const normalizedPrice = getNormalizedNumber(price as number, 100);
            return (
              <div
                key={item.id}
                className="flex justify-between gap-4 border p-2"
              >
                <p className="w-[8rem]">{item.name['en-US']}</p>
                <img
                  src={item.variant.images?.[0].url}
                  alt="item.name['en-US']"
                  width={120}
                  height={120}
                />
                <div>
                  <span>price</span>
                  <p>{normalizedPrice}</p>
                </div>
                <div>
                  <span>quantity</span>
                  <input
                    className="w-16 rounded"
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
                </div>
                <div>
                  <span>total price</span>
                  <p>{item.quantity * normalizedPrice}</p>
                </div>
                <button
                  className="border p-2"
                  onClick={() => {
                    removeItemFromCart(cart.id, cart.version, item.id, item.quantity).catch((e) => {
                      Error(e);
                    });
                  }}
                >
                  Remove
                </button>
              </div>
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
              // onKeyDown={(event: KeyboardEvent) => {
              //   if (event.key === 'Enter') {
              //     discountHandler().catch((e) => {
              //       Error(e);
              //     });
              //   }
              // }}
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
          <p className="self-end">
            Total price: {cart.totalPrice.centAmount / 100}{' '}
            {cart.discountCodes.length > 0 && (
              <span className="text-gray-500 line-through">{initialPrice / 100}</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

import { useSelector } from 'react-redux';
import { getCartWithCustomerId, updateCart } from '../../helpers/api/apiRoot';
import type { AddToCartParams, RootState } from '../../utils/types';
import type { Cart } from '@commercetools/platform-sdk';
import { useEffect, useState } from 'react';
import { getNormalizedNumber } from '../catalogPage/utils/getNormalizedNumber';
import { Link } from 'react-router-dom';
import { NavRoutes } from '../../utils/routes';
import { getCartFromLs, setCartToLs } from './utils/cartStorage';
import { createCartHandler } from './utils/createCartHandler';

export const CartPage = () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const customer = useSelector((state: { authData: RootState }) => state.authData.customer);

  useEffect(() => {
    if (customer === null) {
      const cartInLs = getCartFromLs();

      if (cartInLs !== null) {
        setCart(cartInLs);
      } else {
        createCartHandler()
          .then((cart) => {
            setCart(cart);
            setCartToLs(cart);
          })
          .catch((e) => {
            Error(e);
          });
      }
    } else {
      getCartWithCustomerId(customer.id)
        .then(async (cart) => {
          setCart(cart.body);
        })
        .catch(async (e) => {
          const newCart = await createCartHandler(customer.id);
          setCart(newCart);
          Error(e);
        });
    }
  }, [customer]);

  if (cart === null) return <p className="text-center text-lg">Loading...</p>;

  const addToCart = async ({ cartId, cartVersion, productId, centAmount, quantity = 1 }: AddToCartParams) => {
    const updatedCart = await updateCart(cartId, cartVersion, [
      {
        action: 'addLineItem',
        productId,
        quantity,
        externalPrice: {
          currencyCode: 'EUR',
          centAmount
        }
      }
    ]);
    setCart(updatedCart.body);

    if (customer === null) {
      setCartToLs(updatedCart.body);
    }
  };

  const updateQuantity = async (
    cartId: string,
    cartVersion: number,
    lineItemId: string,
    quantity: number,
    centAmount: number
  ) => {
    const updatedCart = await updateCart(cartId, cartVersion, [
      {
        action: 'changeLineItemQuantity',
        lineItemId,
        quantity,
        externalPrice: {
          currencyCode: 'EUR',
          centAmount
        }
      }
    ]);
    setCart(updatedCart.body);

    if (customer === null) {
      setCartToLs(updatedCart.body);
    }
    console.log(updatedCart.body, 'item quantity updated');
  };

  const removeHandler = async (lineItemId: string, quantity: number = 1) => {
    const updatedCart = await updateCart(cart.id, cart.version, [
      {
        action: 'removeLineItem',
        lineItemId,
        quantity
      }
    ]);
    setCart(updatedCart.body);

    if (customer === null) {
      setCartToLs(updatedCart.body);
    }
    console.log(updatedCart.body, 'cart updated');
  };

  if (cart.lineItems.length === 0) {
    return (
      <>
        <button
          className="bordder p-2"
          onClick={() => {
            addToCart({
              cartId: cart.id,
              cartVersion: cart.version,
              productId: '56aa4cae-7f6f-41cb-b65e-1e69e9d33284',
              centAmount: cart.lineItems[0].variant.prices?.[0].value.centAmount as number
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

  return (
    <div className="m-auto mt-4 max-w-[42rem] rounded border p-2">
      <button
        className="bordder p-2"
        onClick={() => {
          addToCart({
            cartId: cart.id,
            cartVersion: cart.version,
            productId: '56aa4cae-7f6f-41cb-b65e-1e69e9d33284',
            centAmount: cart.lineItems[0].variant.prices?.[0].value.centAmount as number
          }).catch((e) => {
            Error(e);
          });
        }}
      >
        add Item
      </button>
      {cart !== null && (
        <div className="flex flex-col gap-2">
          {cart.lineItems.map((item) => {
            const normalizedPrice = getNormalizedNumber(
              item.variant.prices?.[0].value.centAmount as number,
              100
            );
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
                      updateQuantity(
                        cart.id,
                        cart.version,
                        item.id,
                        parseInt(e.target.value),
                        item.variant.prices?.[0].value.centAmount as number
                      ).catch((e) => {
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
                    removeHandler(item.id, item.quantity).catch((e) => {
                      Error(e);
                    });
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <p className="self-end">Total price: {getNormalizedNumber(cart.totalPrice.centAmount, 100)}</p>
        </div>
      )}
    </div>
  );
};
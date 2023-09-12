import { getNormalizedNumber } from '../catalogPage/utils/getNormalizedNumber';
import { Link } from 'react-router-dom';
import { NavRoutes } from '../../utils/routes';
import { useCart } from '../../hooks/useCart';

export const CartPage = () => {
  const { addToCart, updateQuantity, removeItemFromCart, cart } = useCart();
  console.log(cart);
  if (cart === null) return <p className="text-center text-lg">Loading...</p>;

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
              centAmount: 39900
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
            centAmount: 39900
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
          <p className="self-end">Total price: {getNormalizedNumber(cart.totalPrice.centAmount, 100)}</p>
        </div>
      )}
    </div>
  );
};

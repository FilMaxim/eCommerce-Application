import { useSelector } from 'react-redux';
import { createCart, getCartWithCustomerId, getCartWithId } from '../helpers/api/apiRoot';
import type { RootState } from '../utils/types';
import type { Customer } from '@commercetools/platform-sdk';

export const CartPage = () => {
  const customer = useSelector((state: { authData: RootState }) => state.authData.customer) as Customer;
  const cart = { currency: 'EUR', customerId: customer.id };

  const showCart = async () => {
    const newCart = await createCart(cart);
    console.log(newCart, 'cart created');

    const customerCart = await getCartWithCustomerId(customer.id);
    console.log(customerCart, 'request cart by customerId');

    const cartByid = await getCartWithId(newCart.body.id);
    console.log(cartByid);
  };

  return (
    <div className="m-auto mt-4 max-w-[42rem] rounded border p-2">
      <p
        onClick={() => {
          showCart().catch((e) => {
            Error(e);
          });
        }}
      >
        Cart test
      </p>
    </div>
  );
};

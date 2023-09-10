import { useEffect, useState } from 'react';
import { NavBar } from './NavBar/NavBar';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { useSelector, useDispatch } from 'react-redux';
import { getCartWithCustomerId } from '../../helpers/api/apiRoot';
import { getCartFromLs, setCartToLs } from '../../pages/CartPage/utils/cartStorage';
import { createCartHandler } from '../../pages/CartPage/utils/createCartHandler';
import { setCart } from '../../slices/cartSlice';
import { type RootState } from '../../utils/types';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const customer = useSelector((state: { authData: RootState }) => state.authData.customer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (customer === null) {
      const cartInLs = getCartFromLs();

      if (cartInLs !== null) {
        dispatch(setCart(cartInLs));
      } else {
        createCartHandler()
          .then((cart) => {
            dispatch(setCart(cart));
            setCartToLs(cart);
          })
          .catch((e) => {
            Error(e);
          });
      }
    } else {
      getCartWithCustomerId(customer.id)
        .then(async (cart) => {
          dispatch(setCart(cart.body));
        })
        .catch(async (e) => {
          const newCart = await createCartHandler(customer.id);
          dispatch(setCart(newCart));
          // Error(e);
        });
    }
  }, [customer, dispatch]);

  return (
    <header className="h-[5rem] border-b bg-black text-secondary">
      <NavBar clickHandler={setMobileMenuOpen} />
      <BurgerMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

import { useEffect, useState } from 'react';
import { NavBar } from './NavBar/NavBar';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { useSelector, useDispatch } from 'react-redux';
import { getCartWithCustomerId } from '../../helpers/api/apiRoot';
import { getCartFromLs, setCartToLs } from '../../pages/CartPage/utils/cartStorage';
import { createCartHandler } from '../../pages/CartPage/utils/createCartHandler';
import { setCartData } from '../../slices/cartSlice';
import { type RootState } from '../../utils/types';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const customer = useSelector((state: { authData: RootState }) => state.authData.customer);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateLs = (): void => {
      const cartInLs = getCartFromLs();
      // prettier-ignore
      cartInLs !== null
        ? dispatch(setCartData(cartInLs))
        : createCartHandler()
          .then((cart) => {
            dispatch(setCartData(cart));
            setCartToLs(cart);
          })
          .catch((e) => {
            Error(e);
          });
    };
    // prettier-ignore
    customer === null
      ? updateLs()
      : getCartWithCustomerId(customer.id)
        .then(async (cart) => {
          dispatch(setCartData(cart.body));
        })
        .catch(async (e) => {
          const newCart = await createCartHandler(customer.id);
          dispatch(setCartData(newCart));
          // Error(e);
        });
  }, [customer, dispatch]);

  return (
    <header className="h-[5rem] bg-black text-secondary">
      <NavBar clickHandler={setMobileMenuOpen} />
      <BurgerMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

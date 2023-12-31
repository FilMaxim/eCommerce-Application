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
    if (customer === null) {
      const cartInLs = getCartFromLs();

      if (cartInLs !== null) {
        dispatch(setCartData(cartInLs));
      } else {
        createCartHandler()
          .then((cart) => {
            dispatch(setCartData(cart));
            setCartToLs(cart);
          })
          .catch((e) => {
            Error(e);
          });
      }
    } else {
      getCartWithCustomerId(customer.id)
        .then(async (cart) => {
          dispatch(setCartData(cart.body));
        })
        .catch(async (e) => {
          const newCart = await createCartHandler(customer.id);
          dispatch(setCartData(newCart));
          // Error(e);
        });
    }
  }, [customer, dispatch]);

  return (
    <header className="h-[5rem] bg-black  text-secondary">
      <div className="container mx-auto">
        <NavBar clickHandler={setMobileMenuOpen} />
        <BurgerMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </div>
    </header>
  );
};

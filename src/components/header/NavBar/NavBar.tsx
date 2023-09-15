import { useSelector } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import type { ClickHandlerInterface, RootState } from '../../../utils/types';
import { Logo } from '../../logo/logo';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import { PrivateNavGroup } from './PrivateNavGroup';
import { NavGroup } from './NavGroup';
import { useCart } from '../../../hooks/useCart';

export const NavBar = ({ clickHandler }: ClickHandlerInterface) => {
  const isLogged = useSelector((state: { authData: RootState }) => state.authData.isLogged);
  const { cart } = useCart();
  const { logout } = useAuth();

  return (
    <nav
      className="mx-auto flex items-center justify-between gap-4 p-4 lg:px-8"
      aria-label="Global"
    >
      <Logo className="block" />
      <ul className="hidden gap-4 text-xl sm:flex">
        <NavGroup clickHandler={clickHandler} />
      </ul>
      <BurgerBtn clickHandler={clickHandler} />
      <ul className="hidden gap-3 sm:flex">
        <PrivateNavGroup
          itemsCount={cart?.totalLineItemQuantity}
          clickHandler={clickHandler as (open: boolean) => void}
          isLogged={isLogged}
          logout={logout}
        />
      </ul>
    </nav>
  );
};

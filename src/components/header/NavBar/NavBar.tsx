import { useSelector } from 'react-redux';
import { useAuth } from '../../../helpers/hooks';
import type { ClickHandlerInterface, RootState } from '../../../utils/types';
import { Logo } from '../../logo/logo';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import { PrivateNavGroup } from './PrivateNavGroup';

export const NavBar = ({ clickHandler }: ClickHandlerInterface) => {
  const isLogged = useSelector((state: RootState) => state.isLogged);
  const { logout } = useAuth();

  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between gap-4 p-4 lg:px-8"
      aria-label="Global"
    >
      <Logo className="block" />
      <BurgerBtn clickHandler={clickHandler} />
      <PrivateNavGroup
        isLogged={isLogged}
        logout={logout}
      />
    </nav>
  );
};

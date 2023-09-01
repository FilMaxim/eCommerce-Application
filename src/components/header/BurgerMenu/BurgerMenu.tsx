import { Dialog } from '@headlessui/react';
import { Logo } from '../../logo/logo';
import { BurgerCloseBtn } from './BurgerCloseBtn/BurgerCloseBtn';
import type { BurgerMenuProps, RootState } from '../../../utils/types';
import { PrivateNavGroup } from '../NavBar/PrivateNavGroup';
import { useAuth } from '../../../hooks/useAuth';
import { useSelector } from 'react-redux';
import { NavGroup } from '../NavBar/NavGroup';

export const BurgerMenu = ({ mobileMenuOpen, setMobileMenuOpen }: BurgerMenuProps) => {
  const isLogged = useSelector((state: { authData: RootState }) => state.authData.isLogged);
  const { logout } = useAuth();

  return (
    <Dialog
      as="div"
      className="sm:hidden text-secondary"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col overflow-y-auto bg-black px-6 py-6 sm:max-w-sm">
        <div className="flex items-center justify-between mt-[-8px] mx-[-8px]">
          <Logo />
          <BurgerCloseBtn clickHandler={setMobileMenuOpen} />
        </div>
        <ul className="nav-burger">
          <NavGroup />
        </ul>
        <ul className="mt-auto flex flex-col items-center gap-2">
          <PrivateNavGroup
            isLogged={isLogged}
            logout={logout}
          />
        </ul>
      </Dialog.Panel>
    </Dialog>
  );
};

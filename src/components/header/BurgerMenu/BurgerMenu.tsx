import { Dialog } from '@headlessui/react';
import { Logo } from '../../logo/logo';
import { BurgerCloseBtn } from './BurgerCloseBtn/BurgerCloseBtn';
import type { BurgerMenuProps, RootState } from '../../../utils/types';
import { PrivateNavGroup } from '../NavBar/PrivateNavGroup';
import { useAuth } from '../../../hooks/useAuth';
import { useSelector } from 'react-redux';
import { NavGroup } from '../NavBar/NavGroup';
import { useCart } from '../../../hooks/useCart';

export const BurgerMenu = ({ mobileMenuOpen, setMobileMenuOpen }: BurgerMenuProps) => {
  const isLogged = useSelector((state: { authData: RootState }) => state.authData.isLogged);
  const { logout } = useAuth();
  const { cart } = useCart();

  return (
    <Dialog
      as="div"
      className="overflow-hidden text-secondary sm:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <Dialog.Panel className="fixed inset-0 z-10 flex flex-col overflow-y-auto bg-black bg-burger-bender bg-[length:200px_400px] bg-right-bottom bg-no-repeat px-4 py-6">
        <div className="mx-[-7px] mt-[-7px] flex items-center justify-between">
          <Logo />
          <BurgerCloseBtn clickHandler={setMobileMenuOpen} />
        </div>
        <ul className="mt-8 flex flex-col gap-5 p-2 text-xl">
          <NavGroup clickHandler={setMobileMenuOpen} />
        </ul>
        <ul className="mt-auto flex items-center gap-2">
          <PrivateNavGroup
            clickHandler={setMobileMenuOpen}
            isLogged={isLogged}
            logout={logout}
            itemsCount={cart?.totalLineItemQuantity}
          />
        </ul>
      </Dialog.Panel>
    </Dialog>
  );
};

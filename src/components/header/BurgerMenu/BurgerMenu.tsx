import { Dialog } from '@headlessui/react';
import { Logo } from '../../logo/logo';
import { BurgerCloseBtn } from './BurgerCloseBtn/BurgerCloseBtn';
import type { BurgerMenuProps } from '../../../utils/types';
import { PrivateNavGroup } from '../NavBar/PrivateNavGroup';
import { NavGroup } from '../NavBar/NavGroup';

export const BurgerMenu = ({ mobileMenuOpen, setMobileMenuOpen }: BurgerMenuProps) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <Dialog.Panel className=" fixed inset-y-0 right-0 z-10 flex w-full flex-col overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Logo />
          <BurgerCloseBtn clickHandler={setMobileMenuOpen} />
        </div>
        <ul>
          <NavGroup />
        </ul>
        <ul className="mt-auto flex flex-col items-center gap-2">
          <PrivateNavGroup />
        </ul>
      </Dialog.Panel>
    </Dialog>
  );
};

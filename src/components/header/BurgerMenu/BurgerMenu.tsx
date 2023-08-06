import React from 'react';
import { Dialog } from '@headlessui/react';
import { Logo } from '../logo/logo';
import { BurgerCloseBtn } from './BurgerCloseBtn/BurgerCloseBtn';

interface IBurgerMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const BurgerMenu = ({ mobileMenuOpen, setMobileMenuOpen }: IBurgerMenuProps) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />

      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Logo />

          <BurgerCloseBtn clickHandler={setMobileMenuOpen} />
        </div>

        <div className="mt-6 flow-root">
          {['LogIn', 'Register'].map((item) => (
            <div
              key={item}
              className="-my-6 divide-y divide-gray-500/10"
            >
              <div className="py-3">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-cyan-500"
                >
                  {item}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

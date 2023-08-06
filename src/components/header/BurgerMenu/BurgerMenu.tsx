import { Dialog } from '@headlessui/react';
import { Logo } from '../logo/logo';
import { BurgerCloseBtn } from './BurgerCloseBtn/BurgerCloseBtn';
import { links } from '../../utils/links';
import { Link } from 'react-router-dom';

const linksData = [
  links.login,
  links.registration
];

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
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Logo />

          <BurgerCloseBtn clickHandler={setMobileMenuOpen} />
        </div>

        <ul className="mt-6 flow-root">
          {linksData.map((item) => (
            <li
              key={item.text}
              className="-mx-6 cursor-pointer p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-cyan-500"
            >
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </Dialog.Panel>
    </Dialog>
  );
};

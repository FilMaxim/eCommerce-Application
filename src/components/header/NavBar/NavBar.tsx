import React from 'react';
import { Logo } from '../logo/logo';
import BurgerBtn from './BurgerBtn/BurgerBtn';

interface INavBar {
  clickHandler: (open: boolean) => void;
}

const NavBar: React.FC<INavBar> = ({ clickHandler }) => {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between gap-4 p-6 lg:px-8"
      aria-label="Global"
    >
      <Logo className="flex lg:flex-1" />

      {/* <MainMenu /> */}

      <div className="flex lg:hidden">
        <BurgerBtn clickHandler={clickHandler} />
      </div>

      {['LogIn', 'Register'].map((item) => (
        <div
          key={item}
          className="hidden lg:flex lg:justify-end"
        >
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-cyan-500"
          >
            {item}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;

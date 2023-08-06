import React from 'react';
import { Logo } from '../logo/logo';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';

const links = ['LogIn', 'Register'];

interface INavBaProps {
  clickHandler: (open: boolean) => void;
}

export const NavBar = ({ clickHandler }: INavBaProps) => {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between gap-4 p-6 lg:px-8"
      aria-label="Global"
    >
      <Logo className="block" />

      <BurgerBtn clickHandler={clickHandler} />

      <ul className="hidden gap-3 lg:flex">
        {links.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-cyan-500"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

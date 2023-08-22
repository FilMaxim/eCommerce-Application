import type { ClickHandlerInterface } from '../../../utils/types';
import { Logo } from '../../logo/logo';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import { PrivateNavGroup } from './PrivateNavGroup';
import { NavGroup } from './NavGroup';

export const NavBar = ({ clickHandler }: ClickHandlerInterface) => {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between gap-4 p-4 lg:px-8"
      aria-label="Global"
    >
      <Logo className="block" />
      <ul className='hidden gap-4 lg:flex text-xl'>
        <NavGroup />
      </ul>
      <BurgerBtn clickHandler={clickHandler} />
      <ul className="hidden gap-3 lg:flex">
        <PrivateNavGroup />
      </ul>
    </nav>
  );
};

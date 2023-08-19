import type { ClickHandlerInterface } from '../../../utils/types';
import { Logo } from '../../logo/logo';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import { PrivateNavGroup } from './PrivateNavGroup';

export const NavBar = ({ clickHandler }: ClickHandlerInterface) => {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between gap-4 p-4 lg:px-8"
      aria-label="Global"
    >
      <Logo className="block" />
      <BurgerBtn clickHandler={clickHandler} />
      <PrivateNavGroup />
    </nav>
  );
};

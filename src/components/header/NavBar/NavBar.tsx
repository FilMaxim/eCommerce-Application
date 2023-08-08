import { links } from '../../../utils/links';
import { Logo } from '../../logo/logo';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import { Link } from 'react-router-dom';

const linksData = [links.login, links.registration];

interface INavBarProps {
  clickHandler: (open: boolean) => void;
}

export const NavBar = ({ clickHandler }: INavBarProps) => {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between gap-4 p-6 lg:px-8"
      aria-label="Global"
    >
      <Logo className="block" />

      <BurgerBtn clickHandler={clickHandler} />

      <ul className="hidden gap-3 lg:flex">
        {linksData.map((item) => (
          <li key={item.text}>
            <Link
              to={item.path}
              className="flex items-center gap-1 rounded-lg border border-black px-2 py-1 text-sm font-semibold leading-6 text-gray-900 hover:border-cyan-500 hover:text-cyan-500"
            >
              <item.icon className="h-6 w-6" />
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

import { links } from '../../utils/links';
import { Logo } from '../logo/logo';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import { Link } from 'react-router-dom';

const linksData = [links.login, links.registration];

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
        {linksData.map((item) => (
          <li key={item.text}>
            <Link
              to={item.path}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-cyan-500"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

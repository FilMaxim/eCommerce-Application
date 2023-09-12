import { Link } from 'react-router-dom';
import { NavGroup } from '../header/NavBar/NavGroup';
import { Logo } from '../logo/logo';
import logo from '../../assets/logo-rs.svg';
import { useSelector } from 'react-redux';
import { type RootState } from '../../utils/types';
import { links } from '../../utils/links';

export const Footer = () => {
  const isLogged = useSelector((state: { authData: RootState }) => state.authData.isLogged);
  const linksData = isLogged ? [links.cart, links.profile] : [links.cart, links.login, links.registration];

  return (
    <footer className="bg-black text-secondary bg-burger-bender bg-[length:100px_200px] bg-right-bottom bg-no-repeat sm:bg-footer-bender sm:bg-left-bottom sm:bg-[length:110px_110px]">
      <nav
        className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 p-4 sm:flex-row lg:px-8"
        aria-label="Global"
      >
        <Logo />
        <div className="flex items-center gap-[10vw]">
          <ul className="flex flex-col gap-2 text-sm">
            <NavGroup />
          </ul>
          <ul className="flex flex-col gap-2 text-sm">
            {linksData.map((item) => (
              <li
                key={item.text}
                className="hover:opacity-70"
              >
                <Link
                  to={item.path}
                  aria-label={item.text}
                  className="inline-flex items-center gap-1"
                >
                  {item.icon}
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to={'https://rs.school/'} className='mr-8'>
          <img
            src={logo}
            alt="rs_school_js"
            height="60"
            width="60"
          />
        </Link>
      </nav>
      <p className="pb-1 text-center text-xs text-gray-500">Created by team of three at 2023</p>
    </footer>
  );
};

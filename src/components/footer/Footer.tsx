import { Link } from 'react-router-dom';
import { NavGroup } from '../header/NavBar/NavGroup';
import { Logo } from '../logo/logo';
import { useSelector } from 'react-redux';
import { type RootState } from '../../utils/types';
import { links } from '../../utils/links';
import { team } from '../../pages/AboutPage';

export const Footer = () => {
  const isLogged = useSelector((state: { authData: RootState }) => state.authData.isLogged);
  const linksData = isLogged ? [links.cart, links.profile] : [links.cart, links.login, links.registration];

  return (
    <footer className="bg-black text-secondary ">
      <nav
        className="mx-auto mb-[-1rem] flex max-w-7xl flex-col items-start justify-between gap-4 bg-burger-bender bg-[length:100px_200px] bg-right-bottom bg-no-repeat p-4 pb-8 sm:flex-row sm:bg-footer-bender sm:bg-[length:110px_110px] sm:bg-left-bottom lg:px-8"
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
        <ul className="flex gap-2 sm:flex-col">
          {team.map((member) => (
            <Link
              key={member.id}
              to={member.github}
              className="hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="dark:text-primary-400 h-8 w-8 text-secondary"
              >
                <path
                  fill="currentColor"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </Link>
          ))}
        </ul>
      </nav>
      <p className="pb-1 text-center text-xs text-gray-500 ">Created by team of three at 2023</p>
    </footer>
  );
};

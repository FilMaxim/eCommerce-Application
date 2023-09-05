import { links } from '../../../utils/links';
import { Link } from 'react-router-dom';
import type { PrivateNavGroupProps } from '../../../utils/types';

export const PrivateNavGroup = ({ isLogged, logout, clickHandler }: PrivateNavGroupProps) => {
  const linksData = isLogged ? [links.cart, links.profile, links.logout] : [links.cart, links.login, links.registration];

  return (
    <>
      {linksData.map((item) => (
        <li
          key={item.text}
          className="p-1 hover:opacity-70"
        >
          <Link
            to={item.path}
            onClick={
              item.text === 'Logout'
                ? () => {
                    logout();
                    clickHandler(false);
                  }
                : () => {
                    clickHandler(false);
                  }
            }
          >
            {item.icon}
          </Link>
        </li>
      ))}
    </>
  );
};

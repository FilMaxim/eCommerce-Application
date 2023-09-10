import { links } from '../../../utils/links';
import { Link } from 'react-router-dom';
import type { PrivateNavGroupProps } from '../../../utils/types';
import Badge from '@mui/material/Badge';

export const PrivateNavGroup = ({ isLogged, logout, clickHandler, itemsCount }: PrivateNavGroupProps) => {
  const linksData = isLogged
    ? [links.cart, links.profile, links.logout]
    : [links.cart, links.login, links.registration];

  return (
    <>
      {linksData.map((item) => (
        <li
          key={item.text}
          className="p-1 hover:opacity-70"
        >
          <Link
            to={item.path}
            aria-label={item.text}
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
            {
              /* prettier-ignore */
              item.text === 'Cart'
                ? (
              <Badge
                className="r-1 t-2"
                color="warning"
                badgeContent={itemsCount}
              >
                {item.icon}
              </Badge>
                  )
                : (
                    item.icon
                  )
            }
          </Link>
        </li>
      ))}
    </>
  );
};

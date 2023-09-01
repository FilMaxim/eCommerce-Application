import { links } from '../../../utils/links';
import { Link } from 'react-router-dom';
import type { PrivateNavGroupProps } from '../../../utils/types';

export const PrivateNavGroup = ({ isLogged, logout }: PrivateNavGroupProps) => {
  const linksData = isLogged ? [links.profile, links.logout] : [links.login, links.registration];

  return (
    <>
      {linksData.map((item) => (
        <li
          key={item.text}
          className="hover:opacity-70 p-1"
        >
          <Link
            to={item.path}
            onClick={item.text === 'Logout' ? logout : undefined}
          >
            {item.icon}
          </Link>
        </li>
      ))}
    </>
  );
};

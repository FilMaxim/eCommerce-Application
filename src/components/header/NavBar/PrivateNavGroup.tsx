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
          className="rounded-lg border border-black hover:bg-slate-200"
        >
          <Link
            to={item.path}
            className="flex items-center gap-1 px-2 py-1 text-sm font-semibold leading-6 text-gray-900"
            onClick={item.text === 'Logout' ? logout : undefined}
          >
            <item.icon className="h-6 w-6" />
            {item.text}
          </Link>
        </li>
      ))}
    </>
  );
};

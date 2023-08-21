import { useSelector } from 'react-redux';
import { links } from '../../../utils/links';
import type { RootState } from '../../../utils/types';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../helpers/hooks';

export const PrivateNavGroup = () => {
  const isLogged = useSelector((state: RootState) => state.isLogged);
  const { logout } = useAuth();

  const linksData = isLogged ? [links.logout] : [links.login, links.registration];
  return (
    <ul className="hidden gap-3 lg:flex">
      {linksData.map((item) => (
        <li
          key={item.text}
          className="rounded-lg border border-black hover:bg-slate-200"
        >
          <Link
            to={item.path}
            className="flex items-center gap-1 px-2 py-1 text-sm font-semibold leading-6 text-gray-900"
            onClick={isLogged ? logout : undefined}
          >
            <item.icon className="h-6 w-6" />
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

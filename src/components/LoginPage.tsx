import { Link } from 'react-router-dom';
import { links } from './utils/links';
import { Logo } from './header/logo/logo';

const linksData = [links.registration];

export const LoginPage = () => (
  <>
    <Logo />
    <p>LoginPage</p>
    <ul className="mt-6 flex gap-3">
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
  </>
);

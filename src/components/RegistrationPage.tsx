import { Link } from 'react-router-dom';
import { links } from './utils/links';
import { Logo } from './header/logo/logo';

const linksData = [links.login];

export const RegistrationPage = () => (
  <main>
    <Logo />
    <p>RegistrationPage</p>
    <ul className="mt-6 flex gap-3">
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
  </main>
);

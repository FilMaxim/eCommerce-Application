import { Link } from 'react-router-dom';
import { links } from '../utils/links';
import { Logo } from '../components/logo/logo';

export const LoginPage = () => (
  <main>
    <Logo />
    <p>LoginPage</p>
    <Link
      to={links.registration.path}
      className="inline-flex items-center gap-1 rounded-lg border border-black px-2 py-1 text-sm font-semibold leading-6 text-gray-900 hover:border-cyan-500 hover:text-cyan-500"
    >
      <links.registration.icon className="h-6 w-6" />
      {links.registration.text}
    </Link>
  </main>
);

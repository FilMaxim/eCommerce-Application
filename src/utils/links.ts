import { UserIcon, UserMinusIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { NavRoutes } from './routes';

export const links = {
  main: { text: 'MainPage', path: NavRoutes.mainPagePath },
  login: { text: 'LogIn', path: NavRoutes.loginPagePath, icon: UserIcon },
  logout: { text: 'Logout', path: NavRoutes.loginPagePath, icon: UserMinusIcon },
  registration: { text: 'Registration', path: NavRoutes.registrationPagePath, icon: UserPlusIcon }
};

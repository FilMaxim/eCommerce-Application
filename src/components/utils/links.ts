import { routes } from './routes';
import { UserIcon, UserPlusIcon } from '@heroicons/react/24/outline';

export const links = {
  main: { text: 'MainPage', path: routes.mainPagePath() },
  login: { text: 'LogIn', path: routes.loginPagePath(), icon: UserIcon },
  registration: { text: 'Registration', path: routes.registrationPagePath(), icon: UserPlusIcon }
};

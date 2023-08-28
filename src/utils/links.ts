import { UserIcon, UserMinusIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { NavRoutes } from './routes';

export const links = {
  main: { text: 'Home', path: NavRoutes.mainPagePath },
  about: { text: 'About', path: NavRoutes.aboutPage },
  contacts: { text: 'Contacts', path: NavRoutes.contactsPage },
  login: { text: 'LogIn', path: NavRoutes.loginPagePath, icon: UserIcon },
  logout: { text: 'Logout', path: NavRoutes.mainPagePath, icon: UserMinusIcon },
  registration: {
    text: 'Registration',
    path: NavRoutes.registrationPagePath,
    icon: UserPlusIcon
  },
  product: { text: 'Product', path: NavRoutes.productPage }
};

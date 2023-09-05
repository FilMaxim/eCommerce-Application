import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import { NavRoutes } from './routes';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const links = {
  main: {
    text: 'Home',
    path: NavRoutes.mainPagePath
  },
  about: {
    text: 'About',
    path: NavRoutes.aboutPage
  },
  contacts: {
    text: 'Contacts',
    path: NavRoutes.contactsPage
  },
  catalog: {
    text: 'Catalog',
    path: NavRoutes.catalogPage
  },
  login: {
    text: 'LogIn',
    path: NavRoutes.loginPagePath,
    icon: <LoginOutlinedIcon color="secondary" />
  },
  logout: {
    text: 'Logout',
    path: NavRoutes.mainPagePath,
    icon: <LogoutOutlinedIcon color="secondary" />
  },
  profile: {
    text: 'Profile',
    path: NavRoutes.profilePagePath,
    icon: <PermIdentityOutlinedIcon color="secondary" />
  },
  registration: {
    text: 'Registration',
    path: NavRoutes.registrationPagePath,
    icon: <HowToRegOutlinedIcon color="secondary" />
  },
  product: { text: 'Product', path: NavRoutes.productPage },
  cart: { text: 'Cart', path: NavRoutes.cartPagePath, icon: <ShoppingCartOutlinedIcon color="secondary" /> }
};

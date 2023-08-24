import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import { NavRoutes } from './routes';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

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
  login: {
    text: 'LogIn',
    path: NavRoutes.loginPagePath,
    icon: LoginOutlinedIcon
  },
  logout: {
    text: 'Logout',
    path: NavRoutes.mainPagePath,
    icon: LogoutOutlinedIcon
  },
  profile: {
    text: 'Profile',
    path: NavRoutes.profilePagePath,
    icon: PermIdentityOutlinedIcon
  },
  registration: {
    text: 'Registration',
    path: NavRoutes.registrationPagePath,
    icon: HowToRegOutlinedIcon
  }
};

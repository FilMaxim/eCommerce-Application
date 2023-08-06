import { routes } from './routes';

export const links = {
  main: { text: 'MainPage', path: routes.mainPagePath() },
  login: { text: 'LogIn', path: routes.loginPagePath() },
  registration: { text: 'Registration', path: routes.registrationPagePath() }
};

import { PrivateOutlet } from '../components/PrivateOutlet';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { NavRoutes } from './routes';
import { AboutPage } from '../pages/AboutPage';
import { ContactsPage } from '../pages/ContactsPage';
import { Product } from '../pages/ProductPage';
export const routesConfig = [
  {
    path: NavRoutes.mainPagePath,
    element: <MainPage />
  },
  {
    path: NavRoutes.aboutPage,
    element: <AboutPage />
  },
  {
    path: NavRoutes.contactsPage,
    element: <ContactsPage />
  },
  {
    path: NavRoutes.loginPagePath,
    element: (
      <PrivateOutlet>
        <LoginPage />
      </PrivateOutlet>
    )
  },
  {
    path: NavRoutes.registrationPagePath,
    element: (
      <PrivateOutlet>
        <RegistrationPage />
      </PrivateOutlet>
    )
  },
  {
    path: NavRoutes.productPage,
    element: <Product />
  },
  {
    path: NavRoutes.notFoundPagePath,
    element: <NotFoundPage />
  }
];

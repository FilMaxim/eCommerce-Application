import { PrivateOutlet } from '../components/PrivateOutlet';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { NavRoutes } from './routes';
import { AboutPage } from '../pages/AboutPage';
import { Product } from '../pages/ProductPage/ProductPage';
import { CatalogPage } from '../pages/catalogPage/CatalogPage';
import { UserProfilePage } from '../pages/UserProfilePage';
import { AnonymOutlet } from '../components/AnonymOutlet';
import { CartPage } from '../pages/CartPage/CartPage';

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
    path: NavRoutes.catalogPage,
    element: <CatalogPage />,
    name: 'catalog'
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
    path: NavRoutes.profilePagePath,
    element: (
      <AnonymOutlet>
        <UserProfilePage />
      </AnonymOutlet>
    )
  },
  {
    path: NavRoutes.notFoundPagePath,
    element: <NotFoundPage />
  },
  {
    path: NavRoutes.cartPagePath,
    element: <CartPage />
  },
  {
    path: NavRoutes.companionsPagePath,
    element: <CatalogPage />
  },
  {
    path: NavRoutes.cleanersPagePath,
    element: <CatalogPage />
  },
  {
    path: NavRoutes.petsPagePath,
    element: <CatalogPage />
  },
  {
    path: NavRoutes.kitchensPagePath,
    element: <CatalogPage />
  },
  {
    path: NavRoutes.gardensPagePath,
    element: <CatalogPage />
  },
  {
    path: NavRoutes.deliveriesPagePath,
    element: <CatalogPage />
  }
];

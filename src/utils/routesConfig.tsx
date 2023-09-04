import { PrivateOutlet } from '../components/PrivateOutlet';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { NavRoutes } from './routes';
import { AboutPage } from '../pages/AboutPage';
import { ContactsPage } from '../pages/ContactsPage';
import { Product } from '../pages/ProductPage';
import { CatalogPage } from '../pages/catalogPage/CatalogPage';
import { UserProfilePage } from '../pages/UserProfilePage';
import { AnonymOutlet } from '../components/AnonymOutlet';
import { Companions } from '../pages/catalogPage/categories/Companions';
import { Cleaners } from '../pages/catalogPage/categories/Cleaners';
import { Pets } from '../pages/catalogPage/categories/Pets';
import { Kitchens } from '../pages/catalogPage/categories/Kitchens';
import { Gardens } from '../pages/catalogPage/categories/Gardens';
import { Deliveries } from '../pages/catalogPage/categories/Deliveries';

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
    path: NavRoutes.companionsPagePath,
    element: <Companions />
  },
  {
    path: NavRoutes.cleanersPagePath,
    element: <Cleaners />
  },
  {
    path: NavRoutes.petsPagePath,
    element: <Pets />
  },
  {
    path: NavRoutes.kitchensPagePath,
    element: <Kitchens />
  },
  {
    path: NavRoutes.gardensPagePath,
    element: <Gardens />
  },
  {
    path: NavRoutes.deliveriesPagePath,
    element: <Deliveries />
  }
];

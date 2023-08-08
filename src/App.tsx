import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { routes } from './utils/routes';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { MainPage } from './pages/MainPage';

export const App = () => (
  <Router>
    <Routes>
      <Route
        path={routes.mainPagePath()}
        element={<MainPage />}
      />
      <Route
        path={routes.loginPagePath()}
        element={<LoginPage />}
      />
      <Route
        path={routes.registrationPagePath()}
        element={<RegistrationPage />}
      />
      <Route
        path={routes.notFoundPagePath()}
        element={<NotFoundPage />}
      />
    </Routes>
  </Router>
);

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { routesConfig } from '../utils/routesConfig';
import { Header } from './header/header';

export const App = () => {
  return (
    <Router>
      <Header />
      <main className="w-full">
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </main>
    </Router>
  );
};

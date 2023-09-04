import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { routesConfig } from '../utils/routesConfig';
import { Header } from './header/header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CategoriesProveder } from './CategoriesProvider';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#DB4444'
    },
    primary: {
      main: '#000000'
    }
  }
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <main className="m-auto w-full max-w-7xl px-2">
          <CategoriesProveder>
            <Routes>
              {routesConfig.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </CategoriesProveder>
        </main>
      </Router>
    </ThemeProvider>
  );
};

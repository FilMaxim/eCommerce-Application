import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { routesConfig } from '../utils/routesConfig';
import { Header } from './header/header';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
        <main className="w-full px-2">
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
    </ThemeProvider>
  );
};

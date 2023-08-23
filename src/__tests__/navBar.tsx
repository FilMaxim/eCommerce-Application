import { screen, render } from '@testing-library/react';
import { PrivateNavGroup } from '../components/header/NavBar/PrivateNavGroup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const renderPrivateNavGroup = (isLogged: boolean) =>
  render(
    <BrowserRouter>
      <Routes>
        <Route
          path={''}
          element={
            <PrivateNavGroup
              isLogged={isLogged}
              logout={() => {}}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );

describe('PrivateNavGroup', () => {
  it('displays login & registration link while logout state', () => {
    renderPrivateNavGroup(false);

    const LogInLink = screen.getByText(/LogIn/i);
    expect(LogInLink).toBeInTheDocument();

    const RegistrationLink = screen.getByText(/Registration/i);
    expect(RegistrationLink).toBeInTheDocument();
  });

  it('not display logout link while logout state', () => {
    renderPrivateNavGroup(false);

    const logout = screen.queryByText(/Logout/i);
    expect(logout).toBeFalsy();
  });

  it('does not display login & registration link while logIn state', () => {
    renderPrivateNavGroup(true);

    const LogInLink = screen.queryByText(/LogIn/i);
    expect(LogInLink).toBeFalsy();

    const RegistrationLink = screen.queryByText(/Registration/i);
    expect(RegistrationLink).toBeFalsy();
  });

  it('display logout link while logIn state', () => {
    renderPrivateNavGroup(true);

    const logout = screen.getByText(/Logout/i);
    expect(logout).toBeInTheDocument();
  });
});

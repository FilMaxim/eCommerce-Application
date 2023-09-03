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

    const LogInLink = screen.queryByTestId(/LoginOutlinedIcon/i);
    expect(LogInLink).toBeInTheDocument();

    const RegistrationLink = screen.queryByTestId(/HowToRegOutlinedIcon/i);
    expect(RegistrationLink).toBeInTheDocument();
  });

  it('not display logout link while logout state', () => {
    renderPrivateNavGroup(false);

    const logout = screen.queryByTestId(/LogoutOutlinedIcon/i);
    expect(logout).toBeFalsy();
  });

  it('does not display login & registration link while logIn state', () => {
    renderPrivateNavGroup(true);

    const LogInLink = screen.queryByTestId(/LoginOutlinedIcon/i);
    expect(LogInLink).toBeFalsy();

    const RegistrationLink = screen.queryByTestId(/HowToRegOutlinedIcon/i);
    expect(RegistrationLink).toBeFalsy();
  });

  it('display logout link while logIn state', () => {
    renderPrivateNavGroup(true);

    const logout = screen.queryByTestId(/LogoutOutlinedIcon/i);
    expect(logout).toBeInTheDocument();
  });
});

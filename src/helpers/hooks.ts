import { useState } from 'react';
import type { LoginInterface } from '../utils/types';
import { getUserAccessData } from './api/getUserAccessData';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../utils/routes';

export const useAuth = () => {
  const [isAuth] = useState(localStorage.getItem('token'));
  const location = useLocation();
  const navigate = useNavigate();

  const login = async (userData: LoginInterface): Promise<void> => {
    const tokens = await getUserAccessData(userData);
    const { accessToken, refreshToken } = tokens;

    const { from } = location.state ?? { from: { pathname: routes.mainPagePath() } };
    navigate(from);

    localStorage.setItem('token', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };

  const isLogged = Boolean(isAuth);

  return { login, isLogged };
};

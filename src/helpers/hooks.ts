import { useState } from 'react';
import type { LoginInterface } from '../utils/types';
import { getUserAccessData } from './api/getUserAccessData';
import { useNavigate } from 'react-router-dom';
import { NavRoutes } from '../utils/routes';

export const useAuth = () => {
  const [isAuth] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  const login = async (userData: LoginInterface): Promise<void> => {
    const tokens = await getUserAccessData(userData);
    const { accessToken, refreshToken } = tokens;
    navigate({ pathname: NavRoutes.mainPagePath });

    localStorage.setItem('token', JSON.stringify(accessToken));
    localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
  };

  const isLogged = Boolean(isAuth);

  return { login, isLogged };
};

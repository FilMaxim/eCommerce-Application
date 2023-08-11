import { useState } from 'react';
import type { TokenInterface } from '../utils/types';

export const useAuth = () => {
  const [isAuth] = useState(localStorage.getItem('token'));

  const login = (userData: TokenInterface): void => {
    const { accessToken, refreshToken } = userData;
    localStorage.setItem('token', JSON.stringify(accessToken));
    localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
  };

  const isLogged = Boolean(isAuth);

  return { login, isLogged };
};

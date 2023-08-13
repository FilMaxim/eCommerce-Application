import { useState } from 'react';
import type { LoginInterface } from '../utils/types';
import { getUserAccessData } from './api/getUserAccessData';
import { useNavigate } from 'react-router-dom';
import { NavRoutes } from '../utils/routes';
import { getRefreshedToken } from './api/getRefreshedToken';
import { getTokensFromLs, setExpirationTime, setTokensToLs } from './manageTokens';

import { useDispatch } from 'react-redux';
import { setLogged } from '../slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { tokenFromLs, refreshTokenFromLs } = getTokensFromLs();
  const [token] = useState(tokenFromLs);
  const [refreshToken] = useState(refreshTokenFromLs);
  const isLogged = Boolean(token);
  const navigate = useNavigate();

  const login = async (userData: LoginInterface): Promise<void> => {
    const tokens = await getUserAccessData(userData);
    navigate({ pathname: NavRoutes.mainPagePath });

    const newToken = { ...tokens, tokenExpiration: setExpirationTime(tokens.tokenExpiration) };
    setTokensToLs(newToken);

    dispatch(setLogged(Boolean(newToken)));
  };

  const isExpired = (): boolean => isLogged && getTokensFromLs().expirationFromLs < Date.now();

  const getToken = async () => {
    if (isExpired() && refreshToken !== null) {
      try {
        const newTokens = await getRefreshedToken(refreshToken);
        setTokensToLs({
          accessToken: newTokens.accessToken,
          tokenExpiration: setExpirationTime(newTokens.tokenExpiration),
          refreshToken: null
        });

        return newTokens.accessToken;
      } catch (error) {
        console.error(error);
      }
    }

    return getTokensFromLs().tokenFromLs;
  };

  return { login, isLogged, getToken };
};

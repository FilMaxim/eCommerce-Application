import type { TokenInterface, TokensFromLs } from '../utils/types';

export const setTokensToLs = (newToken: TokenInterface): void => {
  localStorage.setItem('token', newToken.accessToken);
  localStorage.setItem('expiration', String(newToken.tokenExpiration));
  if (newToken.refreshToken !== null) {
    localStorage.setItem('refreshToken', newToken.refreshToken);
  }
};

export const getTokensFromLs = (): TokensFromLs => {
  const tokenFromLs = localStorage.getItem('token');
  const refreshTokenFromLs = localStorage.getItem('refreshToken');
  const expirationFromLs = Number(localStorage.getItem('expiration'));

  return { tokenFromLs, refreshTokenFromLs, expirationFromLs };
};

export const setExpirationTime = (expiration: number): number => expiration + Date.now();

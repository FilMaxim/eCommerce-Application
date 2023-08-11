import type { TokenInterface } from '../../utils/types';

export const login = (userData: TokenInterface): void => {
  localStorage.setItem('userData', JSON.stringify(userData));
};

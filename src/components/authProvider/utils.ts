import type { UserDataInterface } from '../../utils/types';

export const login = (userData: UserDataInterface): void => {
  // localStorage.setItem('userData', JSON.stringify(userData));
  console.log('auth is succes!', userData);
};

import { createContext } from 'react';
import type { UserDataInterface, AuthContextInterface } from '../utils/types';

export const AuthContext = createContext<AuthContextInterface>({
  // user: null,
  login: (data: UserDataInterface) => {}
});

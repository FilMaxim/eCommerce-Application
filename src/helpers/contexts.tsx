import { createContext } from 'react';
import type { TokenInterface, AuthContextInterface } from '../utils/types';

export const AuthContext = createContext<AuthContextInterface>({
  // user: null,
  login: (data: TokenInterface) => {}
});

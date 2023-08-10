import type { AuthContextInterface } from '../utils/types';
import { AuthContext } from './contexts';
import { useContext } from 'react';

export const useAuth = () => useContext<AuthContextInterface>(AuthContext);

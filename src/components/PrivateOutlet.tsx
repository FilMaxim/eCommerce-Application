import { useAuth } from '../helpers/hooks';
import { NavRoutes } from '../utils/routes';
import { Navigate } from 'react-router-dom';
import type { PrivateOutletProps } from '../utils/types';

export const PrivateOutlet = ({ children }: PrivateOutletProps) => {
  const { isLogged } = useAuth();
  return isLogged ? <Navigate to={NavRoutes.mainPagePath} /> : children;
};

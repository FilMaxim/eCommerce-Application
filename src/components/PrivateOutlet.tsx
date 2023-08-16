import { NavRoutes } from '../utils/routes';
import { Navigate } from 'react-router-dom';
import type { PrivateOutletProps, RootState } from '../utils/types';
import { useSelector } from 'react-redux';

export const PrivateOutlet = ({ children }: PrivateOutletProps) => {
  const isLogged = useSelector((state: RootState) => state.isLogged);

  return isLogged ? <Navigate to={NavRoutes.mainPagePath} /> : children;
};

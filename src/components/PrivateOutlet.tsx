import { NavRoutes } from '../utils/routes';
import { Navigate } from 'react-router-dom';
import type { OutletProps, RootState } from '../utils/types';
import { useSelector } from 'react-redux';

export const PrivateOutlet = ({ children }: OutletProps) => {
  const isLogged = useSelector((state: { authData: RootState }) => state.authData.isLogged);

  return isLogged ? <Navigate to={NavRoutes.mainPagePath} /> : children;
};

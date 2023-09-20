import { NavRoutes } from '../utils/routes';
import { Navigate } from 'react-router-dom';
import type { OutletProps, RootState } from '../utils/types';
import { useSelector } from 'react-redux';

export const AnonymOutlet = ({ children }: OutletProps) => {
  const isLogged = useSelector((state: { authData: RootState }) => state.authData.isLogged);

  return isLogged ? children : <Navigate to={NavRoutes.loginPagePath} />;
};

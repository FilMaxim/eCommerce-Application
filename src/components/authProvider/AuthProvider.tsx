import { AuthContext } from '../../helpers/contexts';
import type { AuthProviderPropsInterface } from '../../utils/types';
import { login } from './utils';

export const AuthProvider = ({ children }: AuthProviderPropsInterface) => {
  return <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>;
};

import { getUserAccessData } from '../../../helpers/api/getUserAccessData';
import type { AuthContextInterface, LoginInterface } from '../../../utils/types';

export const handleSubmitLoginForm = async (values: LoginInterface, auth: AuthContextInterface) => {
  const data = await getUserAccessData(values);
  auth.login(data);
};

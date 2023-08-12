import { getUserAccessData } from '../../../helpers/api/getUserAccessData';
import type { AuthLoginInterface, LoginInterface } from '../../../utils/types';

export const handleSubmitLoginForm = async (values: LoginInterface, login: AuthLoginInterface) => {
  const data = await getUserAccessData(values);
  login(data);

  console.log('success!', data);
};

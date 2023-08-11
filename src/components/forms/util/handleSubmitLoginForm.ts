import { getUserAccessData } from '../../../helpers/api/getUserAccessData';
import type { AuthContextInterface, LoginInterface } from '../../../utils/types';

export const handleSubmitLoginForm = async (
  values: LoginInterface,
  login: AuthContextInterface
) => {
  const data = await getUserAccessData(values);
  login(data);

  console.log('success!', data);
};

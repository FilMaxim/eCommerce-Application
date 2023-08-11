import { getUserAccessData } from '../../../helpers/api/getUserAccessData';
import type { LoginInterface } from '../../../utils/types';

export const handleSubmitLoginForm = async (values: LoginInterface) => {
  const data = await getUserAccessData(values);
  console.log('success!', data);
};

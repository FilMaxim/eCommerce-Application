import { getUserAccessData } from '../../../helpers/api/getUserAccessData';
import type { AuthContextInterface, UserAuthInterface } from '../../../utils/types';

export const handleSubmit = async (values: UserAuthInterface, auth: AuthContextInterface) => {
  const data = await getUserAccessData(values);
  auth.login(data);
};

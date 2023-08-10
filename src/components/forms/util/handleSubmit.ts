import { getUserAccessData } from '../../../helpers/api/getUserAccessData';
import type { HandleSubmitInterface } from '../../../utils/types';
// import { ContextType } from '../../../utils/types';

export const handleSubmit = async (values: HandleSubmitInterface) => {
  const data = await getUserAccessData(values);
  console.log(data);
  // auth.login && auth.login({});
};

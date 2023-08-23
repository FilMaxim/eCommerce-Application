import { useSelector } from 'react-redux';
import { type RootState } from '../utils/types';
import type { Customer } from '@commercetools/platform-sdk';

export const UserProfilePage = () => {
  const { id } = useSelector<RootState>((state: RootState) => state.customer) as Customer;
  return (
    <>
      <p>profile</p>
      {/* {JSON.stringify(customer)} */}
      <hr />
      <p>{id}</p>
    </>
  );
};

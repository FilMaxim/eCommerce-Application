import { useSelector } from 'react-redux';
import type { Customer } from '@commercetools/platform-sdk';
import { inputsData } from '../components/forms/inputs/inputsData';
import type { ProfileInitialValues, RootState } from '../utils/types';
import { CustomerProfile } from '../components/forms/customerProfile/customerProfile';

export const UserProfilePage = () => {
  const customer = useSelector<RootState>((state: RootState) => state.customer) as Customer;

  const onSubmit = (value: ProfileInitialValues) => {
    console.log(value);
  };

  return (
    <>
      <CustomerProfile
        customer={customer}
        inputsData={inputsData}
        onSubmit={onSubmit}
      />
    </>
  );
};

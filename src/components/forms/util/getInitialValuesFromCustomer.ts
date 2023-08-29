import type { Customer } from '@commercetools/platform-sdk';
import type { PersonalDataInitialValues } from '../../../utils/types';
// import { getCountryByCode } from './getCountry';

export const getPersonalDataInitialValues = (customer: Customer): PersonalDataInitialValues => {
  return {
    firstName: customer.firstName as string,
    lastName: customer.lastName as string,
    date: customer.dateOfBirth as string,
    email: customer.email
  };
};

import type { Customer } from '@commercetools/platform-sdk';
import type { ProfileInitialValues } from '../../../utils/types';
import { getCountryByCode } from './getCountry';

export const getInitialValues = (customer: Customer): ProfileInitialValues => {
  return {
    firstName: customer.firstName as string,
    lastName: customer.lastName as string,
    date: customer.dateOfBirth as string,
    email: customer.email,
    shippingCountry: getCountryByCode(customer.addresses[0].country),
    shippingStreetName: customer.addresses[0].streetName as string,
    shippingPostalCode: customer.addresses[0].postalCode as string,
    shippingCity: customer.addresses[0].city as string,
    // shippingStateChecked: customer.defaultShippingAddressId as string,
    billingCountry: getCountryByCode(customer.addresses[1]?.country),
    billingStreetName: customer.addresses[1]?.streetName as string,
    billingPostalCode: customer.addresses[1]?.postalCode as string,
    // billingStateChecked: customer.defaultShippingAddressId as string,
    billingCity: customer.addresses[1]?.city as string
  };
};

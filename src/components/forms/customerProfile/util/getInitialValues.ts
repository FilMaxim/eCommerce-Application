import type { Customer } from '@commercetools/platform-sdk';
import type { AddressesInitialValues, PersonalDataInitialValues } from '../../../../utils/types';
import { getCountryByCode } from '../../util/getCountry';

export const newAddressInitialValues = {
  id: '',
  country: '',
  streetName: '',
  postalCode: '',
  city: '',
  shippingStateChecked: false,
  billingStateChecked: false,
  defaultShippingAddress: false,
  defaultBillingAddress: false
};

export const getPersonalDataInitialValues = (customer: Customer): PersonalDataInitialValues => {
  return {
    firstName: customer.firstName ?? '',
    lastName: customer.lastName ?? '',
    date: customer.dateOfBirth ?? '',
    email: customer.email
  };
};

export const getAddressesInitialValues = (customer: Customer): AddressesInitialValues[] => {
  const {
    addresses,
    shippingAddressIds,
    billingAddressIds,
    defaultShippingAddressId,
    defaultBillingAddressId
  } = customer;

  if (addresses.length === 0) return [] as AddressesInitialValues[];

  const result = addresses.map(({ id, country, streetName, postalCode, city }) => ({
    id: id ?? '',
    country: getCountryByCode(country),
    streetName: streetName ?? '',
    postalCode: postalCode ?? '',
    city: city ?? '',
    shippingStateChecked: false,
    billingStateChecked: false,
    defaultShippingAddress: false,
    defaultBillingAddress: false
  }));

  if (shippingAddressIds !== undefined) {
    const indexes = shippingAddressIds.map((id) => addresses.findIndex((address) => address.id === id));
    result.forEach((address, index) => {
      if (indexes.includes(index)) {
        address.shippingStateChecked = true;
      }
    });
  }

  if (billingAddressIds !== undefined) {
    const indexes = billingAddressIds.map((id) => addresses.findIndex((address) => address.id === id));
    result.forEach((address, index) => {
      if (indexes.includes(index)) {
        address.billingStateChecked = true;
      }
    });
  }

  if (defaultShippingAddressId !== undefined) {
    const index = addresses.findIndex((address) => address.id === defaultShippingAddressId);
    result[index].defaultShippingAddress = true;
  }

  if (defaultBillingAddressId !== undefined) {
    const index = addresses.findIndex((address) => address.id === defaultBillingAddressId);
    result[index].defaultBillingAddress = true;
  }

  return result;
};

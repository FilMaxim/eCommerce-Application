import type { Customer } from '@commercetools/platform-sdk';
import type { AddressesInitialValues, PersonalDataInitialValues } from '../../../../utils/types';
import { getCountryByCode } from '../../util/getCountry';

export const getPersonalDataInitialValues = (customer: Customer): PersonalDataInitialValues => {
  return {
    firstName: customer.firstName ?? '',
    lastName: customer.lastName ?? '',
    date: customer.dateOfBirth ?? '',
    email: customer.email
  };
};

export const getAddressesInitialValues = (customer: Customer): AddressesInitialValues[] => {
  const { addresses } = customer;

  if (addresses.length === 0) return [] as unknown as AddressesInitialValues[];

  const result = addresses.map((address) => ({
    id: address.id ?? '',
    country: getCountryByCode(address.country),
    streetName: address.streetName ?? '',
    postalCode: address.postalCode ?? '',
    city: address.city ?? '',
    shippingStateChecked: false,
    billingStateChecked: false,
    defaultShippingAddress: false,
    defaultBillingAddress: false
  }));

  if (customer.shippingAddressIds !== undefined) {
    const indexes = customer.shippingAddressIds.map((id) =>
      addresses.findIndex((address) => address.id === id)
    );
    result.forEach((address, index) => {
      if (indexes.includes(index)) {
        address.shippingStateChecked = true;
      }
    });
  }

  if (customer.billingAddressIds !== undefined) {
    const indexes = customer.billingAddressIds.map((id) =>
      addresses.findIndex((address) => address.id === id)
    );
    result.forEach((address, index) => {
      if (indexes.includes(index)) {
        address.billingStateChecked = true;
      }
    });
  }

  if (customer.defaultShippingAddressId !== undefined) {
    const index = addresses.findIndex((address) => address.id === customer.defaultShippingAddressId);
    result[index].defaultShippingAddress = true;
  }

  if (customer.defaultBillingAddressId !== undefined) {
    const index = addresses.findIndex((address) => address.id === customer.defaultBillingAddressId);
    result[index].defaultBillingAddress = true;
  }

  return result;
};

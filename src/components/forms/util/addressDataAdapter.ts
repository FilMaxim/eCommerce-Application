import type { HandleSubmitWithBoth, CustomerData } from '../../../utils/types';
import { getCountryCode } from './getCountry';

enum AddressSequence {
  Shipping = 0,
  Billing = 1
}

const applyBillingAddress = (
  formData: HandleSubmitWithBoth,
  dataWithShipping: CustomerData
): CustomerData => {
  const result = {
    ...dataWithShipping
  };
  const billingAddress = {
    country: getCountryCode(formData.billingCountry),
    firstName: formData.firstName,
    lastName: formData.lastName,
    streetName: formData.billingStreetName,
    postalCode: formData.billingPostalCode,
    city: formData.billingCity
  };

  result.addresses.push(billingAddress);
  result.billingAddresses = [AddressSequence.Billing];

  if (formData.billingStateChecked) {
    result.defaultBillingAddress = AddressSequence.Billing;
  }

  return result;
};

export const addressAdapter = (formData: HandleSubmitWithBoth): CustomerData => {
  const { firstName, lastName, date, email, password } = formData;
  const shippingAddress = {
    country: getCountryCode(formData.shippingCountry),
    firstName,
    lastName,
    streetName: formData.shippingStreetName,
    postalCode: formData.shippingPostalCode,
    city: formData.shippingCity
  };

  const addresses = [shippingAddress];
  const shippingAddresses = [AddressSequence.Shipping];
  const billingAddresses = shippingAddresses;
  const salutation = Math.random() > 0.5 ? 'Mr' : 'Ms';

  const result: CustomerData = {
    firstName,
    lastName,
    dateOfBirth: date,
    email,
    password,
    addresses,
    shippingAddresses,
    billingAddresses,
    salutation
  };

  if (formData.shippingStateChecked) {
    result.defaultShippingAddress = AddressSequence.Shipping;
  }

  if (formData.billingStreetName !== '') {
    const resultWithBilling = applyBillingAddress(formData, result);
    return resultWithBilling;
  }

  return result;
};

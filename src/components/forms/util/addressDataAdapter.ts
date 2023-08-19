import type { HandleSubminWithBoth, CustomerData } from '../../../utils/types';
import { countries } from './countriesList';

const getCountryCode = (country: string): string => {
  const selectedCountry = countries.find((countryData) => countryData.country === country);
  if (selectedCountry === undefined) {
    return '';
  }
  return selectedCountry.code;
};

const applyBillingAddress = (formData: HandleSubminWithBoth, dataWithShipping: CustomerData): CustomerData => {
  const result = { ...dataWithShipping };
  const billingAddress = {
    country: getCountryCode(formData.billingCountry),
    firstName: formData.firstName,
    lastName: formData.lastName,
    streetName: formData.billingStreetName,
    postalCode: formData.billingPostalCode,
    city: formData.billingCity
  };

  result.addresses.push(billingAddress);
  result.billingAddresses = [1];

  if (formData.billingStateChecked) {
    result.defaultBillingAddress = 1;
  }

  return result;
};

export const addressAdapter = (formData: HandleSubminWithBoth): CustomerData => {
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
  const shippingAddresses = [0];
  const salutation = Math.random() > 0.5 ? 'Mr' : 'Ms';

  const result: CustomerData = {
    firstName,
    lastName,
    dateOfBirth: date,
    email,
    password,
    addresses,
    shippingAddresses,
    salutation
  };

  if (formData.shippingStateChecked) {
    result.defaultShippingAddress = 0;
  }

  if (formData.billingStreetName !== '') {
    const resultWithBilling = applyBillingAddress(formData, result);
    return resultWithBilling;
  }

  return result;
};

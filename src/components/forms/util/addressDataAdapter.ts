import type { HandleSubmitWithBoth, CustomerData } from '../../../utils/types';
import { countries } from './countriesList';

export const getCountryCode = (country: string): string => {
  const selectedCountry = countries.find((countryData) => countryData.country === country);
  if (selectedCountry === undefined) {
    return '';
  }
  return selectedCountry.code;
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
  const shippingAddresses = [0];
  let billingAddresses = [0];
  const defaultShippingAddress = formData.shippingStateChecked ? 0 : undefined;
  let defaultBillingAddress = defaultShippingAddress;

  const salutation = Math.random() > 0.5 ? 'Mr' : 'Ms';

  if (formData.billingStreetName !== '') {
    const billingAddress = {
      country: getCountryCode(formData.billingCountry),
      firstName,
      lastName,
      streetName: formData.billingStreetName,
      postalCode: formData.billingPostalCode,
      city: formData.billingCity
    };
    addresses.push(billingAddress);
    billingAddresses = [1];
    defaultBillingAddress = formData.billingStateChecked ? 1 : undefined;
  }

  return {
    firstName,
    lastName,
    dateOfBirth: date,
    email,
    password,
    addresses,
    shippingAddresses,
    billingAddresses,
    defaultShippingAddress,
    defaultBillingAddress,
    salutation
  };
};

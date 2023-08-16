import type { HandleSubminWithShipping, HandleSubminWithBoth, CustomerData } from '../../../utils/types';
import { stateCheckboxs } from '../RegistrationForm/RegistrationForm';
import { countries } from './countriesList';

const getCountryCode = (country: string): string => {
  const selectedCountry = countries.find((countryData) => countryData.country === country);
  if (selectedCountry === undefined) {
    return '';
  }
  return selectedCountry.code;
};

export const addressAdapter = (formData: HandleSubminWithShipping | HandleSubminWithBoth): CustomerData => {
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
  let billingAddresses = [0];
  let shippingAddresses = [0];
  const salutation = Math.random() > 0.5 ? 'Mr' : 'Ms';

  if (!stateCheckboxs.bothSameShippingBilling && 'billingCountry' in formData) {
    // второе условие заглушка от ошибок
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
    shippingAddresses = [0];
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
    salutation
  };
};

import type {
  HandleSubminWithShipping,
  HandleSubminWithBoth,
  CustomerData
} from '../../../utils/types';
import { countries } from './countriesList';

const getCountryCode = (country: string): string => {
  const selectedCountry = countries.find((countryData) => countryData.country === country);
  if (selectedCountry === undefined) {
    return '';
  }
  return selectedCountry.code;
};

export const addressAdapter = (
  formData: HandleSubminWithShipping | HandleSubminWithBoth
): CustomerData => {
  if ('billingCountry' in formData) {
    return {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dateOfBirth: formData.date,
      email: formData.email,
      password: formData.password,

      addresses: [
        {
          country: getCountryCode(formData.billingCountry),
          firstName: formData.firstName,
          lastName: formData.lastName,
          streetName: formData.billingStreetName,
          postalCode: formData.billingPostalCode,
          city: formData.billingCity
        }
      ],
      shippingAddresses: [0],
      billingAddresses: [0],
      salutation: Math.random() > 0.5 ? 'Mr' : 'Ms'
    };
  } // это временная првоерка, чтобы работали интерфейсы, потом надо будет заменить на что-то нормальное
  return {
    firstName: formData.firstName,
    lastName: formData.lastName,
    dateOfBirth: formData.date,
    email: formData.email,
    password: formData.password,

    addresses: [
      {
        country: getCountryCode(formData.shippingCountry),
        firstName: formData.firstName,
        lastName: formData.lastName,
        streetName: formData.shippingStreetName,
        postalCode: formData.shippingPostalCode,
        city: formData.shippingCity
      }
    ],
    shippingAddresses: [0],
    billingAddresses: [0],
    salutation: Math.random() > 0.5 ? 'Mr' : 'Ms'
  };
};

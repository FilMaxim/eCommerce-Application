import type { IHandleSignUpSubmit, ICustomerData } from '../../../utils/types';
import { countries } from './countriesList';

const getCountryCode = (country: string): string => {
  const selectedCountry = countries.find((countryData) => countryData.country === country);
  if (selectedCountry === undefined) {
    return '';
  }
  return selectedCountry.code;
};

export const addressAdapter = (formData: IHandleSignUpSubmit): ICustomerData => {
  return {
    firstName: formData.firstName,
    lastName: formData.lastName,
    dateOfBirth: formData.date,
    email: formData.email,
    password: formData.password,
    addresses: [
      {
        country: getCountryCode(formData.country),
        firstName: formData.firstName,
        lastName: formData.lastName,
        streetName: formData.street,
        postalCode: formData.postalCode,
        city: formData.city,
        email: formData.email
      }
    ],
    salutation: Math.random() > 0.5 ? 'Mr' : 'Ms'
  };
};

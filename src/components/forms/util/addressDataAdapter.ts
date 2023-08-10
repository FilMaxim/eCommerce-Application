import type { ICustomerData } from '../../../helpers/api/createCustomer';
import { countries } from './countriesList';
import type { IHandleSubmit } from './handleRegistrationSubmit';

const getCountryCode = (country: string): string => {
  const selectedCountry = countries.find((countryData) => countryData.country === country);
  if (selectedCountry === undefined) {
    return '';
  }
  return selectedCountry.code;
};

export const addressAdapter = (formData: IHandleSubmit): ICustomerData => {
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

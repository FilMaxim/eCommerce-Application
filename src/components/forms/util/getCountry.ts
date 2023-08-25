import { countries } from './countriesList';

export const getCountryCode = (country: string): string => {
  const selectedCountry = countries.find((countryData) => countryData.country === country);
  if (selectedCountry === undefined) {
    return '';
  }
  return selectedCountry.code;
};

export const getCountryByCode = (code: string): string => {
  const selectedCountry = countries.find((countryData) => countryData.code === code);
  if (selectedCountry === undefined) {
    return '';
  }
  return selectedCountry.country;
};

import * as yup from 'yup';
import { postcodeValidator } from 'postcode-validator';
import dayjs from 'dayjs';
import { getCountryCode } from './getCountry';

export const minAge = dayjs().subtract(18, 'year').format('YYYY-MM-DD');

const email = yup
  .string()
  .email('Email should be correctly formatted')
  .matches(/\.[A-Z]{2,4}$/i, 'Email should be correctly formatted')
  .required('Required field');

const password = yup
  .string()
  .min(8, 'Password should contain at least 8 characters')
  .matches(/[A-Z]/, 'Password should contain at least one uppercase letter')
  .matches(/[a-z]/, 'Password should contain at least one lowercase letter')
  .matches(/[0-9]/, 'Password should contain at least one digit')
  .matches(/[!@#$%^&*]/, 'Password should contain at least one special character')
  .required('Required field')
  .test(
    'no-leading-or-trailing-whitespace',
    'Password must not contain leading or trailing whitespace',
    (value) => {
      return value === value.trim();
    }
  );

export const validationsSchemaLogin = {
  email,
  password
};

const firstName = yup
  .string()
  .min(1, 'Name should contain at least 1 character')
  .matches(/^[A-Za-z]+$/, 'Numbers and symbols in the name not allowed')
  .trim()
  .required('Required field');

const lastName = firstName;

const date = yup.date().max(minAge, 'You should be older than 18 years').required('Required field');

const shippingStreetName = yup
  .string()
  .min(1, 'Street should contain at least 1 character')
  .trim()
  .required('Required field');

const shippingCity = yup
  .string()
  .min(1, 'City should contain at least 1 character')
  .matches(/^[A-Za-z]+$/, 'Numbers and symbols in the name not allowed')
  .trim()
  .required('Required field');

const shippingCountry = yup.string().required('Required field');

const shippingPostalCode = yup.string().when('shippingCountry', (country: string[], schema) => {
  const code = getCountryCode(country[0]);
  return schema
    .test('postal-validate', 'Invalid zip code format', (value) => {
      const currentValue = value ?? '';
      return postcodeValidator(currentValue, code);
    })
    .trim()
    .required('Required field');
});

const validationsSchemaRegistrationShipping = {
  ...validationsSchemaLogin,
  firstName,
  lastName,
  date,
  shippingStreetName,
  shippingCity,
  shippingCountry,
  shippingPostalCode
};

const billingStreetName = shippingStreetName;

const billingCity = shippingCity;

const billingCountry = shippingCountry;

const billingPostalCode = yup.string().when('billingCountry', (country: string[], schema) => {
  const code = getCountryCode(country[0]);
  return schema
    .test('postal-validate', 'Invalid zip code format', (value) => {
      const currentValue = value ?? '';
      return postcodeValidator(currentValue, code);
    })
    .trim()
    .required('Required field');
});

const validationsSchemaRegistrationBoth = {
  ...validationsSchemaRegistrationShipping,
  billingStreetName,
  billingCity,
  billingCountry,
  billingPostalCode
};

export const getValidationSchema = (isSameAddress: boolean): yup.AnyObjectSchema => {
  return yup.object(
    isSameAddress ? validationsSchemaRegistrationShipping : validationsSchemaRegistrationBoth
  );
};

export const customerPersonalDataSchema = yup.object({
  firstName,
  lastName,
  date,
  email
});

export const customerAddressSchemaShipping = yup.object({
  shippingStreetName,
  shippingCity,
  shippingCountry,
  shippingPostalCode
});

export const customerAddressSchemaBoth = yup.object({
  shippingStreetName,
  shippingCity,
  shippingCountry,
  shippingPostalCode,
  billingStreetName,
  billingCity,
  billingCountry,
  billingPostalCode
});

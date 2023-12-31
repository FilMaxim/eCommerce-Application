import * as yup from 'yup';
import { postcodeValidator } from 'postcode-validator';
import dayjs from 'dayjs';
import { getCountryCode } from './getCountry';

export const minAge = dayjs().subtract(18, 'year').format('YYYY-MM-DD');

const email = yup
  .string()
  .email('Should be correctly formatted')
  .matches(/\.[A-Z]{2,4}$/i, 'Should be correctly formatted')
  .required('Required field');

const password = yup
  .string()
  .min(8, 'Should contain 8 characters')
  .matches(/[A-Z]/, 'Should contain one uppercase letter')
  .matches(/[a-z]/, 'Should contain one lowercase letter')
  .matches(/[0-9]/, 'Should contain one digit')
  .matches(/[!@#$%^&*]/, 'Should contain one special character')
  .required('Required field')
  .test('no-leading-or-trailing-whitespace', 'Leading or trailing whitespace not allowed', (value) => {
    return value === value.trim();
  });

export const validationsSchemaLogin = {
  email,
  password
};

const firstName = yup
  .string()
  .min(1, 'Should contain at least 1 character')
  .matches(/^[A-Za-z]+$/, 'Numbers and symbols not allowed')
  .trim()
  .required('Required field');

const lastName = firstName;

const date = yup.date().max(minAge, 'You should be older than 18 years').required('Required field');

const shippingStreetName = yup
  .string()
  .min(1, 'Should contain at least 1 character')
  .trim()
  .required('Required field');

const shippingCity = yup
  .string()
  .min(1, 'Should contain at least 1 character')
  .matches(/^[A-Za-z]+$/, 'Numbers and symbols not allowed')
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

export const customerAddressSchema = yup.object({
  streetName: shippingStreetName,
  city: shippingCity,
  country: shippingCountry,
  postalCode: yup.string().when('country', (country: string[], schema) => {
    const code = getCountryCode(country[0]);
    return schema
      .test('postal-validate', 'Invalid zip code format', (value) => {
        const currentValue = value ?? '';
        return postcodeValidator(currentValue, code);
      })
      .trim()
      .required('Required field');
  })
});

export const passwordChangeSchema = yup.object({
  currentPassword: password,
  newPassword: password
});

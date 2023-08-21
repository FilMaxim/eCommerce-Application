import * as yup from 'yup';
import dayjs from 'dayjs';

export const minAge = dayjs().subtract(18, 'year').format('YYYY-MM-DD');

export const validationsSchemaLogin = {
  email: yup
    .string()
    .email('Email should be correctly formatted')
    .matches(/\.[A-Z]{2,4}$/i, 'Email should be correctly formatted')
    .required('Required field'),
  password: yup
    .string()
    .min(8, 'Password should contain at least 8 characters')
    .matches(/[A-Z]/, 'Password should contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password should contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password should contain at least one digit')
    .matches(/[!@#$%^&*]/, 'Password should contain at least one special character')
    .required('Required field')
    .test('no-leading-or-trailing-whitespace', 'Password must not contain leading or trailing whitespace', (value) => {
      return value === value.trim();
    })
};

export const validationsSchemaRegistrationShipping = {
  ...validationsSchemaLogin,
  firstName: yup
    .string()
    .min(1, 'Name should contain at least 1 character')
    .matches(/^[A-Za-z]+$/, 'Numbers and symbols in the name not allowed')
    .trim()
    .required('Required field'),
  lastName: yup
    .string()
    .min(1, 'Name should contain at least 1 character')
    .matches(/^[A-Za-z]+$/, 'Numbers and symbols in the name not allowed')
    .trim()
    .required('Required field'),
  date: yup.date().max(minAge, 'You should be older than 18 years').required('Required field'),
  shippingStreetName: yup
    .string()
    .min(1, 'Street should contain at least 1 character')
    .trim()
    .required('Required field'),
  shippingCity: yup
    .string()
    .min(1, 'City should contain at least 1 character')
    .matches(/^[A-Za-z]+$/, 'Numbers and symbols in the name not allowed')
    .trim()
    .required('Required field'),
  shippingPostalCode: yup
    .string()
    .min(1, 'Postal Code should contain at least 1 character')
    .trim()
    .required('Required field'),
  shippingCountry: yup.string().required('Required field')
};

export const validationsSchemaRegistrationBoth = {
  ...validationsSchemaRegistrationShipping,
  billingStreetName: yup
    .string()
    .min(1, 'Street should contain at least 1 character')
    .trim()
    .required('Required field'),
  billingCity: yup
    .string()
    .min(1, 'City should contain at least 1 character')
    .matches(/^[A-Za-z]+$/, 'Numbers and symbols in the name not allowed')
    .trim()
    .required('Required field'),
  billingPostalCode: yup
    .string()
    .min(1, 'Postal Code should contain at least 1 character')
    .trim()
    .required('Required field'),
  billingCountry: yup.string().required('Required field')
};

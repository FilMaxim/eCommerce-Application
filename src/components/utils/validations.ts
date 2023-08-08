import * as yup from 'yup';

export const validationsSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email address must be properly formatted')
    .matches(/\.[A-Z]{2,4}$/i, 'Email address must contain a domain')
    .trim()
    .required('Required field'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .matches(/[!@#$%^&*]/, 'Password must contain at least one special character')
    .trim()
    .required('Required field')
});

import * as yup from 'yup';

export const validationsSchema = yup.object().shape({
  email: yup
    .string()
    .email('Адрес электронной почты должен быть правильно отформатирован')
    .matches(/\.[A-Z]{2,4}$/i, 'Адрес электронной почты должен быть содержать доменную зону')
    .trim()
    .required('Обязательное поле'),
  password: yup
    .string()
    .min(8, 'Пароль должен содержать не менее 8 символов')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
    .matches(/[0-9]/, 'Пароль должен содержать как минимум одну цифру')
    .matches(/[!@#$%^&*]/, 'Пароль должен содержать хотя бы один специальный символ')
    .trim()
    .required('Обязательное поле')
});

import { Form, Formik } from 'formik';
import { PasswordInput } from '../inputs/PasswordInput';
import { SubmitBtn } from '../inputs/SubmitBtn';
import { AddressFieldSet } from '../inputs/AddressFieldSet';
import { Link } from 'react-router-dom';
import { links } from '../../../utils/links';
import { useState } from 'react';
import { FieldSetName, inputsData } from '../inputs/inputsData';
import { Input } from '../inputs/Input';
import type { RegistrationFormProps } from '../../../utils/types';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const RegistrationForm = ({ initialValues, getValidationSchema, onSubmit }: RegistrationFormProps) => {
  const [isSameAddress, setIsSameAddress] = useState<boolean>(true);
  const handleCheckboxChange = () => {
    setIsSameAddress(!isSameAddress);
  };
  const { firstName, lastName, date, email } = inputsData;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getValidationSchema(isSameAddress)}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="flex max-w-2xl flex-col items-center justify-center gap-2 rounded p-6">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[firstName, lastName, date, email].map(({ name, placeholder, type }) => (
                <Input
                  key={name}
                  name={name}
                  placeholder={placeholder}
                  type={type}
                  formik={formik}
                />
              ))}
              <PasswordInput
                formik={formik}
                placeholder="Password:"
                name="password"
              />
            </div>
            <AddressFieldSet
              fieldSet={FieldSetName.Shipping}
              formik={formik}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={'toggle'}
                  checked={isSameAddress}
                  onChange={handleCheckboxChange}
                  color="error"
                />
              }
              label="same as billing address"
            />
            {!isSameAddress && (
              <AddressFieldSet
                fieldSet={FieldSetName.Billing}
                formik={formik}
              />
            )}
            <SubmitBtn title="Create Account" />
            <p className="mt-3 text-center text-[14px]">
              Have an account?
              <Link
                to={links.login.path}
                className="text-red-600 hover:text-red-700"
              >
                {' '}
                Log In
              </Link>
            </p>
          </Form>
        );
      }}
    </Formik>
  );
};

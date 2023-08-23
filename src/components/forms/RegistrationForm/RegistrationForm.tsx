import { Form, Formik } from 'formik';
import { PasswordInput } from '../inputs/PasswordInput';
import { SubmitBtn } from '../inputs/SubmitBtn';
import { AdressFieldSet } from '../inputs/AdressFieldSet';
import { Link } from 'react-router-dom';
import { links } from '../../../utils/links';
import { useState } from 'react';
import { FieldSetName, inputsData } from '../inputs/inputsData';
import { Input } from '../inputs/Input';
import type { RegistrationFormProps } from '../../../utils/types';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const RegistrationForm = ({ initialValues, getValidationSchema, onSubmit }: RegistrationFormProps) => {
  const [isSameAddress, setIsSameAddress] = useState(true);
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
          <Form className="flex w-96 flex-col justify-center gap-1 rounded-2xl bg-slate-200 px-8 pb-8 pt-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,1.1)] max-sm:w-56">
            <Input
              name={firstName.name}
              placeholder={firstName.placeholder}
              type={firstName.type}
              formik={formik}
            />
            <Input
              name={lastName.name}
              placeholder={lastName.placeholder}
              type={lastName.type}
              formik={formik}
            />
            <Input
              name={date.name}
              placeholder={date.placeholder}
              type={date.type}
              formik={formik}
            />
            <Input
              name={email.name}
              placeholder={email.placeholder}
              type={email.type}
              formik={formik}
            />
            <PasswordInput formik={formik} />
            <AdressFieldSet
              fieldSet={FieldSetName.Shipping}
              formik={formik}
            />

            <FormControlLabel
              control={
                <Checkbox
                  name={'toggle'}
                  checked={isSameAddress}
                  onChange={handleCheckboxChange}
                />
              }
              label="same as billing address"
            />
            {!isSameAddress && (
              <AdressFieldSet
                fieldSet={FieldSetName.Billing}
                formik={formik}
              />
            )}
            <SubmitBtn />
            <p className="mt-3 text-center text-[14px]">
              Have an account?
              <Link
                to={links.login.path}
                className="text-link-color"
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

import { Form, Formik } from 'formik';
import { PasswordInput } from '../inputs/PasswordInput';
import { SubmitBtn } from '../inputs/SubmitBtn';
import { AdressFieldSet } from '../inputs/AdressFieldSet';
import { minAge, validationsSchemaRegistrationBoth, validationsSchemaRegistrationShipping } from '../util/validationSchema';
import * as yup from 'yup';
import { handleRegistrationSubmit } from '../util/handleRegistrationSubmit';
import { Link } from 'react-router-dom';
import { links } from '../../../utils/links';
import { useAuth } from '../../../helpers/hooks';
import { useEffect, useState } from 'react';
import { FieldSetType, inputsData } from '../inputs/inputsData';
import { Input } from '../inputs/Input';
import { type StateCheckboxs } from '../../../utils/types';

export const stateCheckboxs: StateCheckboxs = {
  bothSameShippingBilling: true
};

const initialValues = {
  firstName: '',
  lastName: '',
  date: minAge,
  email: '',
  password: '',
  shippingStreetName: '',
  shippingCity: '',
  shippingPostalCode: '',
  shippingCountry: ''
};

const valuesWithBilling = {
  ...initialValues,
  billingStreetName: '',
  billingCity: '',
  billingPostalCode: '',
  billingCountry: ''
};

export const RegistrationForm = () => {
  const { login } = useAuth();
  const [isSameAddress, setIsSameAddress] = useState(true);
  const [schema, setSchema] = useState(validationsSchemaRegistrationShipping);
  const [values, setInitialValues] = useState(initialValues);

  const handleCheckboxChange = () => {
    setIsSameAddress(!isSameAddress); // Изменение состояния чекбокса
    stateCheckboxs.bothSameShippingBilling = isSameAddress;
  };
  const { firstName, lastName, date, email } = inputsData;

  useEffect(() => {
    if (isSameAddress) {
      setInitialValues(initialValues);
      setSchema(validationsSchemaRegistrationShipping);
    } else {
      setInitialValues(valuesWithBilling);
      setSchema(validationsSchemaRegistrationBoth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSameAddress]);
  return (
    <Formik
      initialValues={values}
      validationSchema={yup.object(schema)}
      onSubmit={async (values) => {
        await handleRegistrationSubmit(values, login);
      }}
    >
      <Form className="flex w-96 flex-col justify-center gap-1 rounded-2xl bg-slate-200 px-8 pb-8 pt-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,1.1)] max-sm:w-56">
        <Input
          name={firstName.name}
          placeholder={firstName.placeholder}
          type={firstName.type}
        />
        <Input
          name={lastName.name}
          placeholder={lastName.placeholder}
          type={lastName.type}
        />
        <Input
          name={date.name}
          placeholder={date.placeholder}
          type={date.type}
        />
        <Input
          name={email.name}
          placeholder={email.placeholder}
          type={email.type}
        />
        <PasswordInput />
        <h3 className="text-sm font-bold text-gray-700">Shipping address:</h3>
        <AdressFieldSet fieldSet={FieldSetType.Shipping} />
        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
          >
          <input
            className="checked:border-primary checked:bg-primary dark:checked:border-primary dark:checked:bg-primary relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="checkbox"
            value=""
            checked={isSameAddress} // Привязка состояния чекбокса
            onChange={handleCheckboxChange} // Обработчик события изменения чекбокса
          />
            to use the same address for both billing and shipping
          </label>
        </div>
        {!isSameAddress && (
          <>
            <h3 className="text-sm font-bold text-gray-700">Billing address:</h3>
            <AdressFieldSet fieldSet={FieldSetType.Billing} />
          </>
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
    </Formik>
  );
};

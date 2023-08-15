import { Form, Formik } from 'formik';
import { FirstNameInput } from '../inputs/FirstNameInput';
import { LastNameInput } from '../inputs/LastNameInput';
import { EmailInput } from '../inputs/EmailInput';
import { PasswordInput } from '../inputs/PasswordInput';
import { SubmitBtn } from '../inputs/SubmitBtn';
import { DateInput } from '../inputs/DateInput';
import { AdressFieldSet } from '../inputs/AdressFieldSet';
import { minAge, validationsSchemaRegistration } from '../util/validationSchema';
import * as yup from 'yup';
import { handleRegistrationSubmit } from '../util/handleRegistrationSubmit';
import { Link } from 'react-router-dom';
import { links } from '../../../utils/links';
import { useAuth } from '../../../helpers/hooks';
import { useState } from 'react';

export const RegistrationForm = () => {
  const { login } = useAuth();
  const [isSameAddress, setIsSameAddress] = useState(true); // Состояние чекбокса
  const handleCheckboxChange = () => {
    setIsSameAddress(!isSameAddress); // Изменение состояния чекбокса
  };
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        date: minAge,
        email: '',
        password: '',
        streetName: '',
        city: '',
        postalCode: '',
        country: ''
      }}
      validationSchema={yup.object(validationsSchemaRegistration)}
      onSubmit={async (values) => {
        console.debug(values);
        await handleRegistrationSubmit(values, login);
      }}
    >
      <Form className="flex max-sm:w-56 w-96 flex-col justify-center gap-1 rounded-2xl bg-slate-200 px-8 pb-8 pt-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,1.1)]">
        <FirstNameInput />
        <LastNameInput />
        <DateInput />
        <EmailInput />
        <PasswordInput />
        <div>
          <h3 className="text-sm font-bold text-gray-700">Billing address:</h3>
          <AdressFieldSet />
        </div>
        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input
            className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="checkbox"
            value=""
            id="checkboxDefault"
            checked={isSameAddress} // Привязка состояния чекбокса
            onChange={handleCheckboxChange} // Обработчик события изменения чекбокса
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="checkboxDefault">
            to use the same address for both billing and shipping
          </label>
        </div>
        {!isSameAddress && <div>
          <h3 className="text-sm font-bold text-gray-700">Shipping address:</h3>
          <AdressFieldSet />
        </div>}
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

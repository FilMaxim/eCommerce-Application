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
import { Link } from 'react-router-dom';
import { links } from '../../../utils/links';
import { useAuth } from '../../../helpers/hooks';

export const RegistrationForm = () => {
  const { signUp } = useAuth();
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
      onSubmit={signUp}
    >
      <Form className="flex w-3/5 flex-col justify-center gap-1 rounded-2xl bg-slate-200 px-8 pb-8 pt-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,1.1)]">
        <FirstNameInput />
        <LastNameInput />
        <DateInput />
        <EmailInput />
        <PasswordInput />
        <AdressFieldSet />
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

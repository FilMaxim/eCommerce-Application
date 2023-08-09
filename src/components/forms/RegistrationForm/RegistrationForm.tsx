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

export const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        date: minAge,
        email: '',
        password: '',
        street: '',
        city: '',
        postalCode: '',
        country: ''
      }}
      validationSchema={yup.object(validationsSchemaRegistration)}
      onSubmit={handleRegistrationSubmit}
    >
      <Form className="flex max-w-xs flex-col justify-center gap-2 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <FirstNameInput />
        <LastNameInput />
        <DateInput />
        <EmailInput />
        <PasswordInput />
        <AdressFieldSet />
        <SubmitBtn />
      </Form>
    </Formik>
  );
};

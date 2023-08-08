import { Form, Formik } from 'formik';
import { FirstNameInput } from '../inputs/FirstNameInput';
import { LastNameInput } from '../inputs/LastNameInput';
import { EmailInput } from '../inputs/EmailInput';
import { PasswordInput } from '../inputs/PasswordInput';
import { SubmitBtn } from '../inputs/SubmitBtn';
import { DateInput } from '../inputs/DateInput';
import { AdressFieldSet } from '../inputs/AdressFieldSet';
import { eighteenYearsAgo, validationsSchemaRegistration } from '../util/validationSchema';
import { handleSubmit } from '../util/handleSubmit';
import * as yup from 'yup';

export const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        date: eighteenYearsAgo,
        email: '',
        password: '',
        street: '',
        city: '',
        postalCode: '',
        country: ''
      }}
      validationSchema={yup.object(validationsSchemaRegistration)}
      onSubmit={handleSubmit}
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

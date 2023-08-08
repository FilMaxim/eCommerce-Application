import { Form, Formik } from 'formik';
import { EmailInput } from '../inputs/EmailInput';
import { PasswordInput } from '../inputs/PasswordInput';
import { SubmitBtn } from '../inputs/SubmitBtn';
import { validationsSchemaLogin } from '../util/validationSchema';
import { handleSubmit } from '../util/handleSubmit';
import * as yup from 'yup';

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={yup.object(validationsSchemaLogin)}
      onSubmit={handleSubmit}
    >
      <Form className="flex max-w-xs flex-col justify-center gap-2 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <EmailInput />
        <PasswordInput />
        <SubmitBtn />
      </Form>
    </Formik>
  );
};

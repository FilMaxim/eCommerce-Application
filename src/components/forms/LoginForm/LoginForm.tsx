import { Form, Formik } from 'formik';
import { EmailInput } from '../inputs/EmailInput';
import { PasswordInput } from '../inputs/PasswordInput';
import { SubmitBtn } from '../inputs/SubmitBtn';
import { validationsSchemaLogin } from '../util/validationSchema';
import { handleSubmit } from '../util/handleSubmit';
import * as yup from 'yup';
// import { useAuth } from '../../../helpers/hoks';

export const LoginForm = () => {
  // const auth = useAuth();
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={yup.object(validationsSchemaLogin)}
      onSubmit={async (values) => {
        await handleSubmit(values);
      }}
    >
      <Form className="flex max-w-xs flex-col justify-center gap-2 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <EmailInput />
        <PasswordInput />
        <SubmitBtn />
      </Form>
    </Formik>
  );
};

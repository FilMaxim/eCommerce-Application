import { Form, Formik } from 'formik';
import { PasswordInput } from '../inputs/PasswordInput';
import { SubmitBtn } from '../inputs/SubmitBtn';
import { validationsSchemaLogin } from '../util/validationSchema';
import * as yup from 'yup';
import { links } from '../../../utils/links';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { Input } from '../inputs/Input';
import { inputsData } from '../inputs/inputsData';

export const LoginForm = () => {
  const { login } = useAuth();
  const { email } = inputsData;

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={yup.object(validationsSchemaLogin)}
      onSubmit={login}
    >
      {(formik) => {
        const { name, placeholder, type } = email;
        const { path } = links.registration;
        return (
          <Form className="flex max-w-sm flex-wrap items-center  justify-center rounded p-6">
            <Input
              name={name}
              placeholder={placeholder}
              type={type}
              formik={formik}
            />
            <PasswordInput
              formik={formik}
              placeholder="Password:"
              name="password"
            />
            <SubmitBtn title="Log In" />
            <p className="mt-3 text-center text-[14px]">
              Don&#x27;t have an account?
              <Link
                to={path}
                className="text-secondary hover:text-red-600"
              >
                {' '}
                Create one
              </Link>
            </p>
          </Form>
        );
      }}
    </Formik>
  );
};

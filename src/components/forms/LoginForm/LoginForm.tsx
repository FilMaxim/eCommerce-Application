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
          <Form className="flex w-96 flex-col justify-center gap-2 rounded-2xl bg-slate-200 px-8 pb-8 pt-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,1.1)] max-sm:w-56">
            <Input
              name={name}
              placeholder={placeholder}
              type={type}
              formik={formik}
            />
            <PasswordInput formik={formik} />
            <SubmitBtn />
            <p className="mt-3 text-center text-[14px]">
              Don&#x27;t have an account?
              <Link
                to={path}
                className="text-link-color hover:text-hover-link"
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

import { Form, Formik } from 'formik';
import { EmailInput } from '../inputs/EmailInput';
import { PasswordInput } from '../inputs/PasswordInput';
import { SubmitBtn } from '../inputs/SubmitBtn';
import { validationsSchemaLogin } from '../util/validationSchema';
import { handleSubmitLoginForm } from '../util/handleSubmitLoginForm';
import * as yup from 'yup';
import { links } from '../../../utils/links';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../helpers/hooks';
import { routes } from '../../../utils/routes';

export const LoginForm = () => {
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={yup.object(validationsSchemaLogin)}
      onSubmit={async (values) => {
        await handleSubmitLoginForm(values, login);

        const { from } = location.state ?? { from: { pathname: routes.mainPagePath() } };
        navigate(from);
      }}
    >
      <Form className="flex w-3/5 flex-col justify-center gap-2 rounded-2xl bg-slate-200 px-8 pb-8 pt-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,1.1)]">
        <EmailInput />
        <PasswordInput />
        <SubmitBtn />
        <p className="mt-3 text-center text-[14px]">
          Don&#x27;t have an account?
          <Link
            to={links.registration.path}
            className="text-link-color hover:text-hover-link"
          >
            {' '}
            Create one
          </Link>
        </p>
      </Form>
    </Formik>
  );
};

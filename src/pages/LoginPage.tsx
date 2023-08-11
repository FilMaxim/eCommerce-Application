import { LoginForm } from '../components/forms/LoginForm/LoginForm';

export const LoginPage = () => (
  <div className="flex flex-col items-center pb-5">
    <h1 className="my-5 text-xl font-bold text-gray-900">Log In</h1>
    <LoginForm />
  </div>
);

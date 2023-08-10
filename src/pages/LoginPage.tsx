import { LoginForm } from '../components/forms/LoginForm/LoginForm';

export const LoginPage = () => (
  <div className="pb-5 flex flex-col items-center">
    <h1 className="my-5 text-gray-900 font-bold text-xl">Log In</h1>
    <LoginForm />
  </div>
);

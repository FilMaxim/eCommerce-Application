import { LoginForm } from '../components/forms/LoginForm/LoginForm';

export const LoginPage = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <h1 className="text-xl">Log In</h1>
      <LoginForm />
    </div>
  );
};

import { LoginForm } from '../components/forms/LoginForm/LoginForm';

export const LoginPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center">
      <h1 className="text-xl">Log In</h1>
      <LoginForm />
    </div>
  );
};

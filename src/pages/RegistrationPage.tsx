import { RegistrationForm } from '../components/forms/RegistrationForm/RegistrationForm';

export const RegistrationPage = () => (
  <div className="flex flex-col items-center pb-5">
    <h1 className="my-5 text-xl font-bold text-gray-900">Sign Up</h1>
    <RegistrationForm />
  </div>
);

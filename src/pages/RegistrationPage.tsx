import { RegistrationForm } from '../components/forms/RegistrationForm/RegistrationForm';
import { initialValuesRegistration } from '../components/forms/inputs/inputsData';
import { getValidationSchema } from '../components/forms/util/validationSchema';
import { useAuth } from '../hooks/useAuth';

export const RegistrationPage = () => {
  const { signUp } = useAuth();

  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center">
      <h1 className="mt-2 text-xl">Sign Up</h1>
      <RegistrationForm
        initialValues={initialValuesRegistration}
        getValidationSchema={getValidationSchema}
        onSubmit={signUp}
      />
    </div>
  );
};

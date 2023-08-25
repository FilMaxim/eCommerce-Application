import { RegistrationForm } from '../components/forms/RegistrationForm/RegistrationForm';
import { initialValuesRegistration } from '../components/forms/inputs/inputsData';
import { getValidationSchema } from '../components/forms/util/validationSchema';
import { useAuth } from '../hooks/useAuth';

export const RegistrationPage = () => {
  const { signUp } = useAuth();

  return (
    <div className="flex flex-col items-center pb-5">
      <h1 className="my-5 text-xl font-bold text-gray-900">Sign Up</h1>
      <RegistrationForm
        initialValues={initialValuesRegistration}
        getValidationSchema={getValidationSchema}
        onSubmit={signUp}
      />
    </div>
  );
};

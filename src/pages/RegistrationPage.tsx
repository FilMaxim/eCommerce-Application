import { RegistrationForm } from '../components/forms/RegistrationForm/RegistrationForm';
import { initialValues } from '../components/forms/inputs/inputsData';
import { getValidationSchema } from '../components/forms/util/validationSchema';
import { useAuth } from '../helpers/hooks';

export const RegistrationPage = () => {
  const { signUp } = useAuth();

  return (
    <div className="flex flex-col items-center pb-5">
      <h1 className="my-5 text-xl font-bold text-gray-900">Sign Up</h1>
      <RegistrationForm
        initialValues={initialValues}
        getValidationSchema={getValidationSchema}
        onSubmit={signUp}
      />
    </div>
  );
};

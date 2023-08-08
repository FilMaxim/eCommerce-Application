import { ErrorMessage, Field } from 'formik';

export const FirstNameInput = () => {
  return (
    <>
      <label
        htmlFor="firstName"
        className="text-sm font-bold text-gray-700"
      >
        First Name
      </label>
      <Field
        className="focus:shadow-outline appearance-none rounded border border-cyan-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        name="firstName"
        placeholder="firstName"
      />
      <ErrorMessage
        name="firstName"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

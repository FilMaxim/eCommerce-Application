import { Field, ErrorMessage } from 'formik';

export const PasswordInput = () => {
  return (
    <>
      <label
        htmlFor="password"
        className="mb-2 block text-sm font-bold text-gray-700"
      >
        Password
      </label>
      <Field
        className="focus:shadow-outline mb-3 appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="password"
        name="password"
        placeholder="Password"
      />
      <ErrorMessage
        name="password"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

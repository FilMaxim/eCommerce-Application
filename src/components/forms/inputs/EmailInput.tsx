import { Field, ErrorMessage } from 'formik';

export const EmailInput = () => {
  return (
    <>
      <label
        htmlFor="email"
        className="text-sm font-bold text-gray-700"
      >
        Email address:
      </label>
      <Field
        className="focus:shadow-outline appearance-none rounded border border-cyan-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        name="email"
        placeholder="Email address"
      />
      <ErrorMessage
        name="email"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

import { Field, ErrorMessage } from 'formik';

export const DateInput = () => {
  return (
    <>
      <label
        htmlFor="date"
        className="mb-2 block text-sm font-bold text-gray-700"
      >
        Day of Birth
      </label>
      <Field
        className="focus:shadow-outline mb-3 appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="date"
        name="date"
      />
      <ErrorMessage
        name="date"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

import { Field, ErrorMessage } from 'formik';

export const DateInput = () => {
  return (
    <>
      <label
        htmlFor="date"
        className="text-sm font-bold text-gray-700"
      >
        Day of Birth:
      </label>
      <Field
        className="focus:shadow-outline appearance-none rounded border border-cyan-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
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

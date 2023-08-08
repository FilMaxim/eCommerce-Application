import { Field, ErrorMessage } from 'formik';

export const LastNameInput = () => {
  return (
    <>
      <label
        htmlFor="lastName"
        className="mb-2 block text-sm font-bold text-gray-700"
      >
        Last Name
      </label>
      <Field
        className="focus:shadow-outline mb-3 appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        name="lastName"
        placeholder="Last Name"
      />
      <ErrorMessage
        name="lastName"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

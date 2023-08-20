import { Field, ErrorMessage } from 'formik';
import type { InputProps } from '../../../utils/types';

export const Input = ({ name, type, placeholder }: InputProps) => {
  return (
    <>
      <label
        htmlFor={name}
        className="text-sm text-gray-500"
      >
        {placeholder}
      </label>
      <Field
        className="focus:shadow-outline w-full appearance-none rounded border border-cyan-500 px-3 py-2 leading-tight text-gray-700 shadow transition-all focus:outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

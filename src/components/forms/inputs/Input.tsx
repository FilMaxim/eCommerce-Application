import { Field, ErrorMessage } from 'formik';
import type { InputProps } from '../../../utils/types';
import { useState } from 'react';

export const Input = ({ name, type, placeholder }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <div
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        className="relative"
      >
        {isFocused && (
          <label
            htmlFor={name}
            className="absolute left-3 top-0 text-sm text-gray-500"
          >
            {placeholder}
          </label>
        )}
        <Field
          className={`focus:shadow-outline w-full appearance-none rounded border border-cyan-500 px-3 py-2 leading-tight text-gray-700 shadow transition-all focus:outline-none ${
            isFocused ? 'pt-5' : ''
          }`}
          type={type}
          name={name}
          placeholder={isFocused ? '' : placeholder}
        />
      </div>
      <ErrorMessage
        name={name}
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

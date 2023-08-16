import { Field, ErrorMessage } from 'formik';
import type { InputProps } from '../../../utils/types';
// import { useState } from 'react';

export const Input = ({ name, type, placeholder }: InputProps) => {
  // const [inputValue, setInputValue] = useState('');
  return (
    <>
      <label
        htmlFor={name}
        className="text-sm font-bold text-gray-700"
      >
        {placeholder}
      </label>
      <Field
        className="focus:shadow-outline appearance-none rounded border border-cyan-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
      // value={inputValue}
      // onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setInputValue(event.target.value); }}
      />
      <ErrorMessage
        name={name}
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

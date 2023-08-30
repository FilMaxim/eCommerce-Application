import { Field, ErrorMessage } from 'formik';
import type { InputProps } from '../../../utils/types';
import { useState } from 'react';
import { InputClasses } from './inputsData';

export const Input = ({ name, type, placeholder, formik, disabled }: InputProps) => {
  const [isFoucus, setIsFoucus] = useState<boolean>(false);
  return (
    <div
      className={InputClasses.wrapper}
      onFocus={() => {
        setIsFoucus(true);
      }}
      onBlur={() => {
        setIsFoucus(false);
      }}
    >
      <label
        htmlFor={name}
        className={`${InputClasses.labelWrapper} ${isFoucus ? 'block' : 'hidden'}`}
      >
        {placeholder}
      </label>
      <Field
        className={`${InputClasses.input} ${isFoucus ? 'pt-4' : ''}`}
        type={type}
        name={name}
        placeholder={isFoucus ? '' : placeholder}
        {...(formik !== undefined
          ? {
              onChange: (e: Event) => {
                formik.handleChange(e);
                formik.setFieldTouched(name, true, false);
              }
            }
          : {})}
        disabled={disabled}
      />
      <ErrorMessage
        name={name}
        component="p"
        className={InputClasses.error}
      />
    </div>
  );
};

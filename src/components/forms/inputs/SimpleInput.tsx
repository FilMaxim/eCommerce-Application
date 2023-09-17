import { useState } from 'react';
import { InputClasses } from './inputsData';
import type { InputProps } from '../../../utils/types';

export const SimpleInput = ({
  name,
  type,
  placeholder,
  formik,
  disabled,
  onChange,
  value,
  onKeyDown
}: InputProps) => {
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
      <input
        className={InputClasses.input}
        type={type}
        name={name}
        placeholder={isFoucus ? '' : placeholder}
        disabled={disabled}
        value={value}
        onChange={(event) => {
          onChange?.(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            onKeyDown?.().catch((e) => {
              Error(e);
            });
          }
        }}
      />
    </div>
  );
};

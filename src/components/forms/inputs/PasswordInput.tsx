import { Field, ErrorMessage } from 'formik';
import view from '../../../assets/view.svg';
import noView from '../../../assets/no-view.svg';
import { useState } from 'react';
import type { InputProps, VisibilityIconProps } from '../../../utils/types';
import { InputClasses } from './inputsData';

const VisibilityIcon = ({ handleVisibility, passwordVisibility }: VisibilityIconProps) => {
  return (
    <button
      type="button"
      onClick={handleVisibility}
      className="absolute right-2 top-[30%] w-5"
    >
      <img
        src={passwordVisibility ? view : noView}
        alt="visibility icon"
      />
    </button>
  );
};

export const PasswordInput = ({
  formik,
  disabled,
  placeholder,
  name
}: Pick<InputProps, 'formik' | 'disabled' | 'placeholder' | 'name'>) => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const [isFoucus, setIsFoucus] = useState<boolean>(false);

  const handleVisibility = () => {
    setPasswordVisibility((prev: boolean) => !prev);
  };

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
      <div className="relative">
        <label
          htmlFor={name}
          className={`${InputClasses.labelWrapper} ${isFoucus ? 'block' : 'hidden'}`}
        >
          {placeholder}
        </label>
        <Field
          className={`${InputClasses.input} ${isFoucus ? 'pt-4' : ''}`}
          type={passwordVisibility ? 'text' : 'password'}
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
        <VisibilityIcon
          handleVisibility={handleVisibility}
          passwordVisibility={passwordVisibility}
        />
      </div>
      <ErrorMessage
        name={name}
        component="p"
        className={InputClasses.error}
      />
    </div>
  );
};

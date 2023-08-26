import { Field, ErrorMessage } from 'formik';
import view from '../../../assets/view.svg';
import noView from '../../../assets/no-view.svg';
import { useState } from 'react';
import type { InputProps, VisibilityIconProps } from '../../../utils/types';

const VisibilityIcon = ({ handleVisibility, passwordVisibility }: VisibilityIconProps) => {
  return (
    <button
      type="button"
      onClick={handleVisibility}
      className="absolute right-2 top-2 w-5"
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

  const handleVisibility = () => {
    setPasswordVisibility((prev: boolean) => !prev);
    return false;
  };

  return (
    <>
      <label
        htmlFor={name}
        className="text-sm font-bold text-gray-700"
      >
        {placeholder}
      </label>
      <div className="relative">
        <Field
          className="focus:shadow-outline w-full appearance-none rounded border border-cyan-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none  disabled:border-slate-500 disabled:bg-slate-200"
          type={passwordVisibility ? 'text' : 'password'}
          name={name}
          placeholder={placeholder}
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
        className="text-xs italic text-red-500"
      />
    </>
  );
};

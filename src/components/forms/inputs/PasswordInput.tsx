import { Field, ErrorMessage } from 'formik';
import view from '../../../assets/view.svg';
import noView from '../../../assets/no-view.svg';
import { useState } from 'react';
import type { VisibilityIconProps, FormikProps } from '../../../utils/types';

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

export const PasswordInput = ({ formik }: { formik: FormikProps }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleVisibility = () => {
    setPasswordVisibility((prev: boolean) => !prev);
    return false;
  };

  return (
    <>
      <label
        htmlFor="password"
        className="text-sm font-bold text-gray-700"
      >
        Password:
      </label>
      <div className="relative">
        <Field
          className="focus:shadow-outline w-full appearance-none rounded border border-cyan-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type={passwordVisibility ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          onChange={(e: Event) => {
            formik.handleChange(e);
            formik.setFieldTouched('password', true, false);
          }}
        />
        <VisibilityIcon
          handleVisibility={handleVisibility}
          passwordVisibility={passwordVisibility}
        />
      </div>
      <ErrorMessage
        name="password"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

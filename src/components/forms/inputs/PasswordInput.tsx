import { Field, ErrorMessage } from 'formik';
import view from '../../../assets/view.svg';
import noView from '../../../assets/no-view.svg';
import { useState } from 'react';

export const PasswordInput = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleVisibility = () => {
    setPasswordVisibility((prev: boolean) => !prev);
  };

  return (
    <>
      <label
        htmlFor="password"
        className="mb-2 block text-sm font-bold text-gray-700"
      >
        Password
      </label>
      <div className="relative">
        <Field
          className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type={passwordVisibility ? 'text' : 'password'}
          name="password"
          placeholder="Password"
        />
        <button
          onClick={handleVisibility}
          className="absolute right-2 top-2 w-5"
        >
          <img
            src={passwordVisibility ? view : noView}
            alt="visibility icon"
          />
        </button>
      </div>
      <ErrorMessage
        name="password"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

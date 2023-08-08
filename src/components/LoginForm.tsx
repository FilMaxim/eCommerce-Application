import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { validationsSchema } from './utils/validations';
import view from '../assets/view.svg';
import noView from '../assets/no-view.svg';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log('submit', values);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationsSchema}
      onSubmit={handleSubmit}
    >
      <div className="w-full max-w-xs">
        <Form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Email address:
            </label>
            <Field
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="text"
              name="email"
              placeholder="Email address"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-xs italic text-red-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Password:
            </label>
            <div className="relative">
              <Field
                className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                type={showPassword ? 'password' : 'text'}
                name="password"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute right-0  top-0 mr-2 mt-2 w-5"
                onClick={handleTogglePassword}
              >
                {showPassword ? (<img src={view} alt="Показать" />) : (<img src={noView} alt="Скрыть" />)}
              </button>
            </div>

            <ErrorMessage
              name="password"
              component="p"
              className="text-xs italic text-red-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

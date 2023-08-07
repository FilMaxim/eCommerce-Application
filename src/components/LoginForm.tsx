import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { validationsSchema } from './utils/validations';

export const Login = () => {
  const handleSubmit = (values: { email: string; password: string }) => {
    console.log('submit', values);
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
              Password
            </label>
            <Field
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="password"
              name="password"
              placeholder="Password"
            />
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

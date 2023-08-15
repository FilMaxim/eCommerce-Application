import { Field, ErrorMessage } from 'formik';
import { countries } from '../util/countriesList';
import React, { useState } from 'react';

const Street = () => {
  const [firstName, setFirstName] = useState('');
  return (
    <>
      <label
        htmlFor="streetName"
        className="text-sm font-bold text-gray-700"
      >
        Street:
      </label>
      <Field
        className="focus:shadow-outline appearance-none rounded border border-cyan-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        name='streetName'
        placeholder="Street"
        value={firstName}
        onChange={(value: string) => { setFirstName(value); }}
      />
      <ErrorMessage
        name="streetName"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

const City = () => {
  return (
    <>
      <label
        htmlFor="city"
        className="text-sm font-bold text-gray-700"
      >
        City:
      </label>
      <Field
        className="focus:shadow-outline appearance-none rounded border border-cyan-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        name="city"
        placeholder="City"
      />
      <ErrorMessage
        name="city"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

const PostalCode = () => {
  return (
    <>
      <label
        htmlFor="postalCode"
        className="text-sm font-bold text-gray-700"
      >
        Postal Code:
      </label>
      <Field
        className="focus:shadow-outline appearance-none rounded border border-cyan-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        name="postalCode"
        placeholder="Postal Code"
      />
      <ErrorMessage
        name="postalCode"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

const Country = () => {
  return (
    <>
      <label
        htmlFor="country"
        className="text-sm font-bold text-gray-700"
      >
        Country:
      </label>
      <Field
        as="select"
        className="focus:shadow-outline appearance-none rounded border border-cyan-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        name="country"
        placeholder="Country"
      >
        {countries.map(({ country }) => (
          <option
            key={country}
            value={country}
          >
            {country}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name="country"
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

export const AdressFieldSet = () => {
  return (
    <>
      <Street />
      <City />
      <PostalCode />
      <Country />
    </>
  );
};

import { ErrorMessage, Field } from 'formik';
import type { CountryInputProps } from '../../../utils/types';
import { countries } from '../util/countriesList';
import { useState } from 'react';
import { InputClasses } from './inputsData';

export const CountryInput = ({ fieldSet, setPostalCodeDisabled, formik, disabled }: CountryInputProps) => {
  const hasFieldSetName = fieldSet !== undefined;
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
        htmlFor={hasFieldSetName ? `${fieldSet}Country` : 'country'}
        className={`${InputClasses.labelWrapper} ${isFoucus ? 'block' : 'hidden'}`}
      >
        Country:
      </label>
      <Field
        as="select"
        className={`${InputClasses.input} ${isFoucus ? 'pt-4' : ''}`}
        type="text"
        name={hasFieldSetName ? `${fieldSet}Country` : 'country'}
        placeholder="Country"
        onChange={(e: Event) => {
          formik.handleChange(e);
          setPostalCodeDisabled(false);
        }}
        disabled={disabled}
      >
        <option
          value=""
          disabled
        >
          Select a country
        </option>
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
        name={hasFieldSetName ? `${fieldSet}Country` : 'country'}
        component="p"
        className={InputClasses.error}
      />
    </div>
  );
};

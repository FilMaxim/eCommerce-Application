import { ErrorMessage, Field } from 'formik';
import type { CountryInputProps } from '../../../utils/types';
import { countries } from '../util/countriesList';

export const CountryInput = ({ fieldSet, formik, setPostalCodeDisabled }: CountryInputProps) => {
  return (
    <>
      <label
        htmlFor={`${fieldSet}Country`}
        className="text-sm font-bold text-gray-700"
      >
        Country:
      </label>
      <Field
        as="select"
        className="focus:shadow-outline appearance-none rounded border border-cyan-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        name={`${fieldSet}Country`}
        placeholder="Country"
        onChange={(e: Event) => {
          formik.handleChange(e);
          setPostalCodeDisabled(false);
        }}
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
        name={`${fieldSet}Country`}
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

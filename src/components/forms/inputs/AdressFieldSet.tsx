import { Field, ErrorMessage } from 'formik';
import { countries } from '../util/countriesList';
import { Input } from './Input';
import { inputsData } from './inputsData';
import type { AddressFieldSetProps } from '../../../utils/types';

const Country = ({ fieldSet }: AddressFieldSetProps) => {
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
        name={`${fieldSet}Country`}
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

export const AdressFieldSet = ({ fieldSet }: AddressFieldSetProps) => {
  const { streetName, city, postalCode } = inputsData.shippingAddressFieldSet;
  return (
    <>
      <Input
        name={`${fieldSet}${streetName.name}`}
        type={streetName.type}
        placeholder={streetName.placeholder}
      />
      <Input
        name={`${fieldSet}${city.name}`}
        type={city.type}
        placeholder={city.placeholder}
      />
      <Input
        name={`${fieldSet}${postalCode.name}`}
        type={postalCode.type}
        placeholder={postalCode.placeholder}
      />
      <Country fieldSet={fieldSet} />
    </>
  );
};

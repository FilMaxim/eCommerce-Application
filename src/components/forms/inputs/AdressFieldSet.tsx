import { Field, ErrorMessage } from 'formik';
import { countries } from '../util/countriesList';
import { Input } from './Input';
import { inputsData } from './inputsData';
import type { AddressFieldSetProps, InputProps } from '../../../utils/types';

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

export const PostalCodeInput = ({ name, type, placeholder, formik }: InputProps) => {
  return (
    <>
      <label
        htmlFor={name}
        className="text-sm font-bold text-gray-700"
      >
        {placeholder}
      </label>
      <Field
        className="focus:shadow-outline appearance-none rounded border border-cyan-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e: Event) => {
          formik.handleChange(e);
          formik.setFieldTouched(name, true, false);
          // const country = formik.getFieldProps('shippingCountry').value;
          // postcodeValidator('dfd', country);
        }}
      />
      <ErrorMessage
        name={name}
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

export const AdressFieldSet = ({ fieldSet, formik }: AddressFieldSetProps) => {
  const { streetName, city, postalCode } = inputsData.addressFieldSet;
  return (
    <>
      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
          <Field
            className="checked:border-primary checked:bg-primary dark:checked:border-primary dark:checked:bg-primary relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="checkbox"
            name={`${fieldSet}StateChecked`}
          />
          to save the address as their default address
        </label>
      </div>
      <Input
        name={`${fieldSet}${streetName.name}`}
        type={streetName.type}
        placeholder={streetName.placeholder}
        formik={formik}
      />
      <Input
        name={`${fieldSet}${city.name}`}
        type={city.type}
        placeholder={city.placeholder}
        formik={formik}
      />
      <Country
        fieldSet={fieldSet}
        formik={formik}
      />
      <PostalCodeInput
        name={`${fieldSet}${postalCode.name}`}
        type={postalCode.type}
        placeholder={postalCode.placeholder}
        formik={formik}
      />
    </>
  );
};

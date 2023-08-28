import { Input } from './Input';
import { FieldSetName, inputsData } from './inputsData';
import type { AddressFieldSetProps } from '../../../utils/types';
import { CountryInput } from './CountryInput';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';

const formatName = (name: string) => {
  return name[0].toLowerCase() + name.slice(1);
};

export const AddressFieldSet = ({ fieldSet, formik, disabled }: AddressFieldSetProps) => {
  const [postalCodeDisabled, setPostalCodeDisabled] = useState(true);
  const { streetName, city, postalCode } = inputsData.addressFieldSet;
  const hasFieldSetName = fieldSet !== undefined;

  return (
    <div className="my-1 flex flex-wrap items-center justify-center gap-1 rounded border border-cyan-500 bg-slate-300 p-1">
      {hasFieldSetName && (
        <>
          <h3 className="text-sm font-bold text-gray-700">
            {fieldSet === FieldSetName.Billing ? 'Billing address:' : 'Shipping address:'}
          </h3>
          <hr className="my-1 border-cyan-500" />
        </>
      )}
      {[streetName, city].map(({ name, placeholder, type }) => (
        <Input
          key={name}
          name={hasFieldSetName ? `${fieldSet}${name}` : formatName(name)}
          placeholder={placeholder}
          type={type}
          formik={formik}
          disabled={disabled}
        />
      ))}
      <CountryInput
        {...(hasFieldSetName ? { fieldSet } : {})}
        formik={formik}
        setPostalCodeDisabled={setPostalCodeDisabled}
        disabled={disabled}
      />
      <Input
        name={hasFieldSetName ? `${fieldSet}${postalCode.name}` : formatName(postalCode.name)}
        type={postalCode.type}
        placeholder={postalCode.placeholder}
        formik={formik}
        disabled={postalCodeDisabled || disabled}
      />
      {/* <FormControlLabel // todo: doesn't work since not connected to formik, formik always return initial true
        control={
          <Checkbox
            name={`${fieldSet}StateChecked`}
            defaultChecked
            disabled={disabled}
          />
        }
        label="as default"
        labelPlacement="start"
      /> */}
    </div>
  );
};

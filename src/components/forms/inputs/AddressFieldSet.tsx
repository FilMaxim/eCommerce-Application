import { Input } from './Input';
import { FieldSetName, inputsData } from './inputsData';
import type { AddressFieldSetProps } from '../../../utils/types';
import { CountryInput } from './CountryInput';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';

const formatName = (name: string): string => {
  return name[0].toLowerCase() + name.slice(1);
};

export const AddressFieldSet = ({ fieldSet, formik, disabled }: AddressFieldSetProps) => {
  const [postalCodeDisabled, setPostalCodeDisabled] = useState<boolean>(true);
  const { streetName, city, postalCode } = inputsData.addressFieldSet;
  const hasFieldSetName = fieldSet !== undefined;

  return (
    <div>
      {hasFieldSetName && (
        <h3 className="mb-4 inline-block rounded-full border border-secondary bg-secondary-light p-1 text-sm text-gray-700">
          {fieldSet === FieldSetName.Billing ? 'Billing address:' : 'Shipping address:'}
        </h3>
      )}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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
      </div>
      {hasFieldSetName && (
        <FormControlLabel
          control={
            <Checkbox
              name={`${fieldSet}StateChecked`}
              defaultChecked
              disabled={disabled}
              color="secondary"
              onChange={(e) => {
                formik.handleChange(e.nativeEvent);
              }}
            />
          }
          label="as default"
          labelPlacement="start"
        />
      )}
    </div>
  );
};

import { Input } from './Input';
import { FieldSetName, inputsData } from './inputsData';
import type { AddressFieldSetProps } from '../../../utils/types';
import { PostalcodeInput } from './PostalcodeInput';
import { CountryInput } from './CountryInput';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const AdressFieldSet = ({ fieldSet, formik }: AddressFieldSetProps) => {
  const { streetName, city, postalCode } = inputsData.addressFieldSet;
  return (
    <div className="my-1 flex flex-col gap-1 rounded border border-cyan-500 bg-slate-300 p-1">
      <h3 className="text-sm font-bold text-gray-700">
        {fieldSet === FieldSetName.Billing ? 'Billing address:' : 'Shipping address:'}
      </h3>
      <hr className="my-1 border-cyan-500" />
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
      <CountryInput
        fieldSet={fieldSet}
        formik={formik}
      />
      <PostalcodeInput
        name={`${fieldSet}${postalCode.name}`}
        type={postalCode.type}
        placeholder={postalCode.placeholder}
        formik={formik}
        fieldSet={fieldSet}
      />
      <FormControlLabel
        control={
          <Checkbox
            name={`${fieldSet}StateChecked`}
            defaultChecked
          />
        }
        label="as default"
        labelPlacement="start"
      />
    </div>
  );
};

import type { FormInnerComponent } from '../../../../utils/types';
import { Input } from '../../inputs/Input';
import { inputsData } from '../../inputs/inputsData';

export const PersonalData: FormInnerComponent = (editable: boolean, formik) => {
  const { firstName, lastName, date, email } = inputsData;

  return [firstName, lastName, date, email].map(({ name, placeholder, type }) => (
    <Input
      key={name}
      name={name}
      placeholder={placeholder}
      type={type}
      disabled={!editable}
      formik={formik}
    />
  ));
};

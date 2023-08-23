import { Field, ErrorMessage } from 'formik';
import type { PostalcodeInterface } from '../../../utils/types';

export const PostalcodeInput = ({ name, type, placeholder, formik, fieldSet }: PostalcodeInterface) => {
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
        }}
        disabled={formik.getFieldProps(`${fieldSet}Country`).value.length === 0}
      />
      <ErrorMessage
        name={name}
        component="p"
        className="text-xs italic text-red-500"
      />
    </>
  );
};

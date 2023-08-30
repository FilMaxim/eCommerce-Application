import { minAge } from '../util/validationSchema';

export const inputsData = {
  firstName: {
    name: 'firstName',
    type: 'text',
    placeholder: 'First name'
  },
  lastName: {
    name: 'lastName',
    type: 'text',
    placeholder: 'Last name'
  },
  email: {
    name: 'email',
    type: 'text',
    placeholder: 'Email'
  },
  password: {
    name: 'password',
    type: 'password',
    placeholder: 'Password'
  },
  date: {
    name: 'date',
    type: 'date',
    placeholder: 'Date of Birth'
  },
  addressFieldSet: {
    city: {
      name: 'City',
      type: 'text',
      placeholder: 'City'
    },
    postalCode: {
      name: 'PostalCode',
      type: 'text',
      placeholder: 'Postal Code'
    },
    streetName: {
      name: 'StreetName',
      type: 'text',
      placeholder: 'Street'
    }
  }
};

export enum FieldSetName {
  Shipping = 'shipping',
  Billing = 'billing'
}

export const initialValuesRegistration = {
  firstName: '',
  lastName: '',
  date: minAge,
  email: '',
  password: '',
  shippingStreetName: '',
  shippingCity: '',
  shippingPostalCode: '',
  shippingCountry: '',
  billingStreetName: '',
  billingCity: '',
  billingPostalCode: '',
  billingCountry: '',
  billingStateChecked: true,
  shippingStateChecked: true
};

export enum InputClasses {
  wrapper = 'relative w-[16rem] mb-6',
  error = 'absolute bottom-[-1rem] left-0 text-xs italic text-red-600',
  labelWrapper = 'absolute left-3 top-0 text-xs text-gray-500',
  input = 'leading-tight text-gray-700 transition-all focus:border-secondary focus:outline-none disabled:border-slate-500 disabled:bg-slate-200 w-full appearance-none border-0 border-b-[1px] border-gray-500 px-3  pt-4'
}

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

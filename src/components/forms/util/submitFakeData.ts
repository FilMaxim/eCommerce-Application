import type { HandleSubmitWithBoth } from '../../../utils/types';

export const submitDataWithShipping = {
  email: 'email@example.com',
  password: 'Password123#',
  firstName: 'firstName',
  lastName: 'lastName',
  date: '2002-01-01',
  shippingCountry: 'Cyprus',
  shippingStreetName: 'shippingStreetName',
  shippingPostalCode: '1234',
  shippingCity: 'shippingCity',
  shippingStateChecked: true
};

export const submitDataWithBilling: HandleSubmitWithBoth = {
  ...submitDataWithShipping,
  billingCountry: 'Greece',
  billingStreetName: 'billingStreetName',
  billingPostalCode: '12345',
  billingCity: 'billingCity',
  billingStateChecked: true
};

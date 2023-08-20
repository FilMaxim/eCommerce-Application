import type { HandleSubminWithBoth } from '../../../utils/types';

export const submitDataWithShipping = {
  email: 'email@example.com',
  password: 'Password123#',
  firstName: 'firstName',
  lastName: 'lastName',
  date: '2002-01-01',
  shippingCountry: 'Cyprus',
  shippingStreetName: 'shippingStreetName',
  shippingPostalCode: 'shippingPostalCode',
  shippingCity: 'shippingCity',
  shippingStateChecked: true
};

export const submitDataWithBilling: HandleSubminWithBoth = {
  ...submitDataWithShipping,
  billingCountry: 'Afghanistan',
  billingStreetName: 'billingStreetName',
  billingPostalCode: 'billingPostalCode',
  billingCity: 'billingCity',
  billingStateChecked: true
};

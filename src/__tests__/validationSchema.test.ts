import { getValidationSchema } from '../components/forms/util/validationSchema';
import { submitDataWithBilling, submitDataWithShipping } from '../components/forms/util/submitFakeData';

describe('registrationSubmitValidation', () => {
  const schemaWithShipping = getValidationSchema(true);
  const schemaWithBoth = getValidationSchema(false);

  it('correct yup schema', () => {
    expect(schemaWithShipping.__isYupSchema__).toBe(true);
    expect(schemaWithBoth.__isYupSchema__).toBe(true);
  });

  it('validate with shipping)', () => {
    expect(schemaWithShipping.isValidSync(submitDataWithShipping)).toBe(true);
  });

  it('validate with both)', () => {
    expect(schemaWithBoth.isValidSync(submitDataWithBilling)).toBe(true);
    expect(schemaWithBoth.isValidSync(submitDataWithShipping)).toBe(false);
  });

  it('validate with shipping & billing', () => {
    expect(schemaWithBoth.isValidSync(submitDataWithBilling)).toBe(true);
  });

  it('not validate incorrect firstName', () => {
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, firstName: '' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, firstName: '1' })).toBe(false);
  });

  it('not validate incorrect lastName', () => {
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, lastName: '' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, lastName: '1' })).toBe(false);
  });

  it('not validate incorrect password', () => {
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, password: '' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, password: 'fd1@fS' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, password: 'fd@fSsgsg' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, password: 'fd@fs12gsg' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, password: 'fdDfs12gsg' })).toBe(false);
  });

  it('not validate incorrect email', () => {
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, email: '' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, email: 'fd1dsfS' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, email: 'fd1@fS' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, email: 'fd1@fS.' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, email: 'fd1@fS.d' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, email: 'fd1@fS.dfdff' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, email: '@fS.dds' })).toBe(false);
  });

  it('not validate incorrect date', () => {
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, date: '' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, date: '2012-01-01' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithBilling, date: '21-11-2000' })).toBe(false);
  });

  it('not validate incorrect country', () => {
    expect(schemaWithShipping.isValidSync({ ...submitDataWithShipping, shippingCountry: '' })).toBe(false);
    expect(schemaWithBoth.isValidSync({ ...submitDataWithBilling, billingCountry: '' })).toBe(false);
  });

  it('not validate incorrect city', () => {
    expect(schemaWithShipping.isValidSync({ ...submitDataWithShipping, shippingCity: '' })).toBe(false);
    expect(schemaWithShipping.isValidSync({ ...submitDataWithShipping, shippingCity: '1' })).toBe(false);
    expect(schemaWithBoth.isValidSync({ ...submitDataWithBilling, billingCity: '' })).toBe(false);
  });

  it('not validate incorrect postalCode', () => {
    expect(schemaWithShipping.isValidSync({ ...submitDataWithShipping, shippingPostalCode: '' })).toBe(false);
    expect(schemaWithBoth.isValidSync({ ...submitDataWithBilling, billingPostalCode: '' })).toBe(false);
  });

  it('not validate incorrect streetName', () => {
    expect(schemaWithShipping.isValidSync({ ...submitDataWithShipping, shippingStreetName: '' })).toBe(false);
    expect(schemaWithBoth.isValidSync({ ...submitDataWithBilling, billingStreetName: '' })).toBe(false);
  });
});

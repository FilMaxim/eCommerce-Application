import { addressAdapter } from '../components/forms/util/addressDataAdapter';
import type { HandleSubmitWithBoth } from '../utils/types';
import { submitDataWithBilling } from '../components/forms/util/submitFakeData';

describe('correct adapt submit data into request data', () => {
  const adaptedSubmitData = addressAdapter(submitDataWithBilling);
  const submitDataWithoutBilling: HandleSubmitWithBoth = { ...submitDataWithBilling, billingStreetName: '' };
  const adaptedSubmitDataWithoutBilling = addressAdapter(submitDataWithoutBilling);
  const billingAddressIndex = adaptedSubmitData.billingAddresses[0];
  const shippingAddressIndex = adaptedSubmitData.shippingAddresses[0];
  const adaptedSubmitDatawithoutCheckedDefault = addressAdapter({
    ...submitDataWithBilling,
    shippingStateChecked: false,
    billingStateChecked: false
  });

  it('add shipping address into addresses array', () => {
    expect(adaptedSubmitData.shippingAddresses).toHaveLength(1);
    expect(shippingAddressIndex).toBe(0);
    expect(adaptedSubmitData.addresses[shippingAddressIndex].city).toBe('shippingCity');
  });

  it('ignore billing address, if empty billing fields', () => {
    expect(adaptedSubmitDataWithoutBilling.addresses).toHaveLength(1);
    expect(adaptedSubmitDataWithoutBilling.shippingAddresses).toHaveLength(1);
    expect(adaptedSubmitDataWithoutBilling.addresses[0].city).toBe('shippingCity');
    expect(adaptedSubmitDataWithoutBilling.billingAddresses[0] === shippingAddressIndex).toBe(true);
  });

  it('add billing address into addresses array', () => {
    expect(adaptedSubmitData.addresses).toHaveLength(2);
    expect(adaptedSubmitData.billingAddresses).toHaveLength(1);
    expect(billingAddressIndex).toBe(1);
    expect(adaptedSubmitData.addresses[billingAddressIndex].city).toBe('billingCity');
    expect(adaptedSubmitData.addresses[billingAddressIndex].country).toBe('GR');
  });

  it('add default billing & shipping address, if checked', () => {
    expect(adaptedSubmitData.defaultBillingAddress).toBe(billingAddressIndex);
    expect(adaptedSubmitData.defaultShippingAddress).toBe(shippingAddressIndex);
  });

  it('no default shipping/billing addresses, if not checked', () => {
    expect(adaptedSubmitDatawithoutCheckedDefault.defaultBillingAddress).toBeUndefined();
    expect(adaptedSubmitDatawithoutCheckedDefault.defaultShippingAddress).toBeUndefined();
  });

  it('return correct other fields', () => {
    expect(adaptedSubmitData.dateOfBirth).toBe('2002-01-01');
    expect(adaptedSubmitData.firstName).toBe('firstName');
  });
});

import type { Customer } from '@commercetools/platform-sdk';
import { getAddressesInitialValues } from '../components/forms/util/getInitialValuesFromCustomer';

describe('getAddressInitialValues', () => {
  const fakeCustomerData: Customer = {
    id: '',
    version: 1,
    createdAt: '',
    lastModifiedAt: '',
    email: '',
    isEmailVerified: false,
    authenticationMode: '',
    addresses: []
  };

  const fakeCustomerWithOnlyOneAddress: Customer = {
    ...fakeCustomerData,
    addresses: [
      {
        city: 'fd',
        country: 'AX',
        id: 'FZxT-eI3',
        postalCode: 'df',
        streetName: 'sd'
      }
    ]
  };

  const fakeCustomerWithOneAddressFullData: Customer = {
    ...fakeCustomerData,
    addresses: [
      {
        city: 'fd',
        country: 'AX',
        id: 'FZxT-eI3',
        postalCode: 'df',
        streetName: 'sd'
      }
    ],
    defaultShippingAddressId: 'FZxT-eI3',
    defaultBillingAddressId: 'FZxT-eI3',
    shippingAddressIds: ['FZxT-eI3'],
    billingAddressIds: ['FZxT-eI3']
  };

  const fakeCustomerWithTwoAddresses: Customer = {
    ...fakeCustomerData,
    addresses: [
      {
        city: 'fd',
        country: 'AX',
        id: 'FZxT-eI3',
        postalCode: '12345',
        streetName: 'sd'
      },
      {
        city: 'test',
        country: 'AX',
        id: 'TeST-eI3',
        postalCode: 'df',
        streetName: 'sdsfd'
      }
    ]
  };

  const fakeCustomerWithShippingAddressIds: Customer = {
    ...fakeCustomerWithOnlyOneAddress,
    shippingAddressIds: ['FZxT-eI3']
  };

  const fakeCustomerWithBillingAddressIds: Customer = {
    ...fakeCustomerWithTwoAddresses,
    billingAddressIds: ['TeST-eI3']
  };

  const fakeCustomerWithDefaultShippingAddress: Customer = {
    ...fakeCustomerWithShippingAddressIds,
    defaultShippingAddressId: 'FZxT-eI3'
  };

  const fakeCustomerWithDefaultBillingAddress: Customer = {
    ...fakeCustomerWithBillingAddressIds,
    defaultBillingAddressId: 'TeST-eI3'
  };

  const fakeCustomerwithFullData: Customer = {
    ...fakeCustomerWithShippingAddressIds,
    ...fakeCustomerWithBillingAddressIds,
    ...fakeCustomerWithDefaultShippingAddress,
    ...fakeCustomerWithDefaultBillingAddress
  };

  it('should return initial values for customer with no addresses', () => {
    expect(getAddressesInitialValues(fakeCustomerData)).toEqual([]);
  });

  it('should return initial values for customer with only 1 address', () => {
    expect(getAddressesInitialValues(fakeCustomerWithOnlyOneAddress)).toEqual([
      {
        id: 'FZxT-eI3',
        city: 'fd',
        country: 'Aland Islands',
        postalCode: 'df',
        streetName: 'sd',
        shippingStateChecked: false,
        billingStateChecked: false,
        defaultShippingAddress: false,
        defaultBillingAddress: false
      }
    ]);
  });
  it('should return initial values for customer with 2 addresses', () => {
    expect(getAddressesInitialValues(fakeCustomerWithTwoAddresses)).toEqual([
      {
        id: 'FZxT-eI3',
        city: 'fd',
        country: 'Aland Islands',
        postalCode: '12345',
        streetName: 'sd',
        shippingStateChecked: false,
        billingStateChecked: false,
        defaultShippingAddress: false,
        defaultBillingAddress: false
      },
      {
        id: 'TeST-eI3',
        city: 'test',
        country: 'Aland Islands',
        postalCode: 'df',
        streetName: 'sdsfd',
        shippingStateChecked: false,
        billingStateChecked: false,
        defaultShippingAddress: false,
        defaultBillingAddress: false
      }
    ]);
  });
  it('should return initial values for customer with shippingAddressIds', () => {
    expect(getAddressesInitialValues(fakeCustomerWithShippingAddressIds)).toEqual([
      {
        id: 'FZxT-eI3',
        city: 'fd',
        country: 'Aland Islands',
        postalCode: 'df',
        streetName: 'sd',
        shippingStateChecked: true,
        billingStateChecked: false,
        defaultShippingAddress: false,
        defaultBillingAddress: false
      }
    ]);
  });

  it('should return initial values for customer with billingAddressIds', () => {
    expect(getAddressesInitialValues(fakeCustomerWithBillingAddressIds)).toEqual([
      {
        id: 'FZxT-eI3',
        city: 'fd',
        country: 'Aland Islands',
        postalCode: '12345',
        streetName: 'sd',
        shippingStateChecked: false,
        billingStateChecked: false,
        defaultShippingAddress: false,
        defaultBillingAddress: false
      },
      {
        id: 'TeST-eI3',
        city: 'test',
        country: 'Aland Islands',
        postalCode: 'df',
        streetName: 'sdsfd',
        shippingStateChecked: false,
        billingStateChecked: true,
        defaultShippingAddress: false,
        defaultBillingAddress: false
      }
    ]);
  });

  it('should return initial values for customer with defaultShippingAddressId', () => {
    expect(getAddressesInitialValues(fakeCustomerWithDefaultShippingAddress)).toEqual([
      {
        id: 'FZxT-eI3',
        city: 'fd',
        country: 'Aland Islands',
        postalCode: 'df',
        streetName: 'sd',
        shippingStateChecked: true,
        billingStateChecked: false,
        defaultShippingAddress: true,
        defaultBillingAddress: false
      }
    ]);
  });

  it('should return initial values for customer with defaultBillingAddressId', () => {
    expect(getAddressesInitialValues(fakeCustomerWithDefaultBillingAddress)).toEqual([
      {
        id: 'FZxT-eI3',
        city: 'fd',
        country: 'Aland Islands',
        postalCode: '12345',
        streetName: 'sd',
        shippingStateChecked: false,
        billingStateChecked: false,
        defaultBillingAddress: false,
        defaultShippingAddress: false
      },
      {
        id: 'TeST-eI3',
        city: 'test',
        country: 'Aland Islands',
        postalCode: 'df',
        streetName: 'sdsfd',
        shippingStateChecked: false,
        billingStateChecked: true,
        defaultBillingAddress: true,
        defaultShippingAddress: false
      }
    ]);
  });

  it('should return initial values for customer with full data & 2 address', () => {
    expect(getAddressesInitialValues(fakeCustomerwithFullData)).toEqual([
      {
        id: 'FZxT-eI3',
        city: 'fd',
        country: 'Aland Islands',
        postalCode: '12345',
        streetName: 'sd',
        shippingStateChecked: true,
        billingStateChecked: false,
        defaultShippingAddress: true,
        defaultBillingAddress: false
      },
      {
        id: 'TeST-eI3',
        city: 'test',
        country: 'Aland Islands',
        postalCode: 'df',
        streetName: 'sdsfd',
        shippingStateChecked: false,
        billingStateChecked: true,
        defaultBillingAddress: true,
        defaultShippingAddress: false
      }
    ]);
  });

  it('should return initial values for customer with full data & 1 address', () => {
    expect(getAddressesInitialValues(fakeCustomerWithOneAddressFullData)).toEqual([
      {
        id: 'FZxT-eI3',
        city: 'fd',
        country: 'Aland Islands',
        postalCode: 'df',
        streetName: 'sd',
        shippingStateChecked: true,
        billingStateChecked: true,
        defaultShippingAddress: true,
        defaultBillingAddress: true
      }
    ]);
  });
});

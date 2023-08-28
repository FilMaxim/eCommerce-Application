import type { InitialValuesCustomerPage, RootState } from '../utils/types';
import { updateCustomer, updateCustomerPassword } from '../helpers/api/apiRoot';
import { showToastMessage } from '../helpers/showToastMessage';
import { setCustomer } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { CustomerUpdateAction, Customer, ClientResponse } from '@commercetools/platform-sdk';
import {
  getAddressesInitialValues,
  getPersonalDataInitialValues
} from '../components/forms/customerProfile/util/getInitialValuesFromCustomer';
import { StatusCodes } from '../utils/statusCodes';
import { getCountryCode } from '../components/forms/util/getCountry';
import { UpdateMessage } from '../components/forms/customerProfile/util/updateMessage';

export const useUpdateCustomer = () => {
  const customer = useSelector<RootState>((state: RootState) => state.customer) as Customer;
  const dispatch = useDispatch();
  const personalDataInitialValues = getPersonalDataInitialValues(customer);
  const addressInitialValues = getAddressesInitialValues(customer);

  const saveCustomer = (response: ClientResponse<Customer>) => {
    const customer = response.body;
    localStorage.setItem('customer', JSON.stringify(customer));
    dispatch(setCustomer(customer));
    showToastMessage(UpdateMessage.success, 'green');
  };

  const requestUpdateCustomer = async (
    id: string,
    version: number,
    actions: CustomerUpdateAction[]
  ): Promise<void> => {
    if (actions.length === 0) return;

    try {
      const response = await updateCustomer(id, version, actions);

      if (response.statusCode === StatusCodes.OK) {
        saveCustomer(response);
        return;
      }

      showToastMessage(UpdateMessage.error, 'red');
    } catch (error) {
      showToastMessage(UpdateMessage.error, 'red');
    }
  };

  const onPersonalDataSubmit = async (value: InitialValuesCustomerPage): Promise<void> => {
    if (!('firstName' in value)) return;

    const actions = [] as CustomerUpdateAction[];
    // todo: implement switch-case
    if (value.firstName !== personalDataInitialValues.firstName) {
      actions.push({
        action: 'setFirstName',
        firstName: value.firstName
      });
    }
    if (value.lastName !== personalDataInitialValues.lastName) {
      actions.push({
        action: 'setLastName',
        lastName: value.lastName
      });
    }
    if (value.date !== personalDataInitialValues.date) {
      actions.push({
        action: 'setDateOfBirth',
        dateOfBirth: value.date
      });
    }
    if (value.email !== personalDataInitialValues.email) {
      actions.push({
        action: 'changeEmail',
        email: value.email
      });
    }

    await requestUpdateCustomer(customer.id, customer.version, actions);
  };

  const onAddressChangeSubmit = async (value: InitialValuesCustomerPage): Promise<void> => {
    if (!('streetName' in value)) return;
    const {
      streetName,
      city,
      country,
      postalCode,
      id,
      billingStateChecked,
      shippingStateChecked,
      defaultShippingAddress,
      defaultBillingAddress
    } = value;
    const currentAddress = addressInitialValues.find((address) => address.id === id);
    const actions = [] as CustomerUpdateAction[];
    const isNewAddress = currentAddress === undefined;

    if (
      streetName !== currentAddress?.streetName ||
      city !== currentAddress?.city ||
      country !== currentAddress?.country ||
      postalCode !== currentAddress?.postalCode
    ) {
      const addressAction = {
        ...(isNewAddress
          ? { action: 'addAddress' as const }
          : { action: 'changeAddress' as const, addressId: id }),
        address: {
          streetName,
          city,
          country: getCountryCode(country),
          postalCode
        }
      };
      actions.push(addressAction);
    }

    if (defaultBillingAddress && defaultBillingAddress !== currentAddress?.defaultBillingAddress) {
      actions.push({
        action: 'setDefaultBillingAddress' as const,
        addressId: id
      });
    }

    if (defaultShippingAddress && defaultShippingAddress !== currentAddress?.defaultShippingAddress) {
      actions.push({
        action: 'setDefaultShippingAddress' as const,
        addressId: id
      });
    }

    if (!isNewAddress && billingStateChecked !== currentAddress?.billingStateChecked) {
      actions.push({
        action: billingStateChecked ? ('addBillingAddressId' as const) : ('removeBillingAddressId' as const),
        addressId: id
      });
    }

    if (!isNewAddress && shippingStateChecked !== currentAddress?.shippingStateChecked) {
      actions.push({
        action: shippingStateChecked
          ? ('addShippingAddressId' as const)
          : ('removeShippingAddressId' as const),
        addressId: id
      });
    }

    await requestUpdateCustomer(customer.id, customer.version, actions);
  };

  const onPasswordChangeSubmit = async (value: InitialValuesCustomerPage): Promise<void> => {
    if (!('newPassword' in value)) return;

    const body = {
      id: customer.id,
      version: customer.version,
      currentPassword: value.currentPassword,
      newPassword: value.newPassword
    };

    try {
      const response = await updateCustomerPassword(body);
      if (response.statusCode === StatusCodes.OK) {
        saveCustomer(response);
        return;
      }

      showToastMessage(UpdateMessage.error, 'red');
    } catch (error) {
      showToastMessage(UpdateMessage.error, 'red');
    }
  };

  const onAddressDelete = async (id: string): Promise<void> => {
    const actions = [
      {
        action: 'removeAddress' as const,
        addressId: id
      }
    ];

    await requestUpdateCustomer(customer.id, customer.version, actions);
  };

  return { onPersonalDataSubmit, onAddressChangeSubmit, onPasswordChangeSubmit, onAddressDelete };
};

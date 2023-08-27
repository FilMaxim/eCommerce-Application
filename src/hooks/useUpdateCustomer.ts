import type { InitialValuesCustomerPage, RootState } from '../utils/types';
import { updateCustomer, updateCustomerPassword } from '../helpers/api/apiRoot';
import { showToastMessage } from '../helpers/showToastMessage';
import { setCustomer } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { CustomerUpdateAction, Customer } from '@commercetools/platform-sdk';
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

    if (actions.length === 0) return;

    try {
      const response = await updateCustomer(customer.id, customer.version, actions);

      if (response.statusCode === StatusCodes.OK) {
        const customer = response.body;
        showToastMessage(UpdateMessage.successPersonalData, 'green');
        localStorage.setItem('customer', JSON.stringify(customer));
        dispatch(setCustomer(customer));
        return;
      }

      showToastMessage(UpdateMessage.errorPersonalData, 'red');
    } catch (error) {
      showToastMessage(UpdateMessage.errorPersonalData, 'red');
    }
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
    const actions = [];

    if (
      streetName !== currentAddress?.streetName ||
      city !== currentAddress?.city ||
      country !== currentAddress?.country ||
      postalCode !== currentAddress?.postalCode
    ) {
      const addressAction = {
        ...(currentAddress === undefined
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
      const defaultBillingAddressAction = {
        action: 'setDefaultBillingAddress' as const,
        addressId: id
      };
      actions.push(defaultBillingAddressAction);
    }

    if (defaultShippingAddress && defaultShippingAddress !== currentAddress?.defaultShippingAddress) {
      const defaultShippingAddressAction = {
        action: 'setDefaultShippingAddress' as const,
        addressId: id
      };
      actions.push(defaultShippingAddressAction);
    }

    if (currentAddress !== undefined && billingStateChecked !== currentAddress?.billingStateChecked) {
      const billingAddressAction = {
        action: billingStateChecked ? ('addBillingAddressId' as const) : ('removeBillingAddressId' as const),
        addressId: id
      };
      actions.push(billingAddressAction);
    }

    if (currentAddress !== undefined && shippingStateChecked !== currentAddress?.shippingStateChecked) {
      const shippingAddressAction = {
        action: shippingStateChecked
          ? ('addShippingAddressId' as const)
          : ('removeShippingAddressId' as const),
        addressId: id
      };
      actions.push(shippingAddressAction);
    }

    if (actions.length === 0) return;

    try {
      const response = await updateCustomer(customer.id, customer.version, actions);

      if (response.statusCode === StatusCodes.OK) {
        const customer = response.body;
        showToastMessage(UpdateMessage.successAddress, 'green');
        localStorage.setItem('customer', JSON.stringify(customer));
        dispatch(setCustomer(customer));
        return;
      }

      showToastMessage(UpdateMessage.errorAddress, 'red');
    } catch (error) {
      showToastMessage(UpdateMessage.errorAddress, 'red');
    }
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
        const customer = response.body;
        showToastMessage(UpdateMessage.successPassword, 'green');
        localStorage.setItem('customer', JSON.stringify(customer));
        dispatch(setCustomer(customer));
      }
    } catch (error) {
      showToastMessage(UpdateMessage.errorPassword, 'red');
    }
  };

  const onAddressDelete = async (id: string): Promise<void> => {
    const actions = [
      {
        action: 'removeAddress' as const,
        addressId: id
      }
    ];

    try {
      const response = await updateCustomer(customer.id, customer.version, actions);

      if (response.statusCode === StatusCodes.OK) {
        const customer = response.body;
        showToastMessage(UpdateMessage.deleteAddress, 'green');
        localStorage.setItem('customer', JSON.stringify(customer));
        dispatch(setCustomer(customer));
        return;
      }

      showToastMessage(UpdateMessage.errorDeleteAddress, 'red');
    } catch (error) {
      showToastMessage(UpdateMessage.errorDeleteAddress, 'red');
    }
  };

  return { onPersonalDataSubmit, onAddressChangeSubmit, onPasswordChangeSubmit, onAddressDelete };
};

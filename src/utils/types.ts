import type { initialValuesRegistration } from '../components/forms/inputs/inputsData';
import type * as yup from 'yup';
import type { FieldInputProps } from 'formik';
import type { Customer } from '@commercetools/platform-sdk';

interface UserName {
  firstName: string;
  lastName: string;
}

interface ShippingAddress {
  shippingCountry: string;
  shippingCity: string;
  shippingStreetName: string;
  shippingPostalCode: string;
  shippingStateChecked: boolean;
}

interface BillingAddress {
  billingCountry: string;
  billingCity: string;
  billingStreetName: string;
  billingPostalCode: string;
  billingStateChecked: boolean;
}

interface Address extends UserName {
  country: string;
  city: string;
  streetName: string;
  postalCode: string;
}

export type AddressInterface = UserName & (ShippingAddress | BillingAddress);

export interface LoginInterface {
  email: string;
  password: string;
}

export interface CustomerData extends LoginInterface, UserName {
  dateOfBirth: string;
  addresses: Address[];
  shippingAddresses: number[];
  billingAddresses: number[];
  defaultShippingAddress?: number;
  defaultBillingAddress?: number;
  salutation: string;
}

export interface HandleSubmitWithBoth extends LoginInterface, UserName, BillingAddress, ShippingAddress {
  date: string;
}
export interface LogoParams {
  className?: string;
}

export interface ClickHandlerInterface {
  clickHandler: (open: boolean) => void;
}

export interface BurgerMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export interface VisibilityIconProps {
  handleVisibility: () => void;
  passwordVisibility: boolean;
}

export type AuthLogin = (userData: LoginInterface) => void;

export interface OutletProps {
  children: JSX.Element;
}

export interface AuthReturnInterface {
  login: (userData: LoginInterface) => Promise<void>;
  logout: () => void;
  signUp: (userData: HandleSubmitWithBoth) => Promise<void>;
}

export interface RootState {
  isLogged: boolean;
  customer: Customer | null;
}

export interface AddressFieldComponent {
  label: string;
  name: string;
  placeholder: string;
}

export interface NameInput {
  name: string;
}

export interface FormikProps {
  handleChange: (e: Event) => void;
  setFieldTouched: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void;
  getFieldProps: (value: string) => FieldInputProps<string>;
}

export interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  formik?: FormikProps;
  disabled?: boolean;
}

export interface AddressFieldSetProps {
  fieldSet: 'shipping' | 'billing';
  formik?: FormikProps;
  disabled?: boolean;
}

export interface CountryInputProps extends AddressFieldSetProps {
  setPostalCodeDisabled: (editable: boolean) => void;
}

export interface PostalcodeInterface extends InputProps {
  fieldSet: 'shipping' | 'billing';
}

export type InitialValuesRegistration = typeof initialValuesRegistration;

export interface RegistrationFormProps {
  initialValues: InitialValuesRegistration;
  getValidationSchema: (isSameAddress: boolean) => yup.Schema;
  onSubmit: (values: HandleSubmitWithBoth) => Promise<void>;
}

export interface PrivateNavGroupProps {
  isLogged: boolean;
  logout: () => void;
}

export type FakeOnSubmit = (values: HandleSubmitWithBoth) => Promise<void>;

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface PersonalDataInitialValues {
  firstName: string;
  lastName: string;
  date: string;
  email: string;
}

export interface AddressesInitialValues {
  streetName: string;
  city: string;
  country: string;
  postalCode: string;
  shippingStateChecked: boolean;
  billingStateChecked: boolean;
  defaultShippingAddress: boolean;
  defaultBillingAddress: boolean;
}

export interface TabsPanelProps {
  children1: React.ReactNode;
  children2: React.ReactNode;
  children3: React.ReactNode;
}

export type FormInnerComponent = (editable: boolean, formik: FormikProps) => JSX.Element[] | JSX.Element;

export type AddressExtraControls = (
  editable: boolean,
  initialValues: AddressesInitialValues
) => JSX.Element[] | JSX.Element;

export interface PasswordChangeInitialValues {
  currentPassword: string;
  newPassword: string;
}

export type InitialValuesCustomerPage =
  | PersonalDataInitialValues
  | PasswordChangeInitialValues
  | AddressesInitialValues;

export interface CustomerPageFormProps {
  initialValues: InitialValuesCustomerPage;
  formInner: FormInnerComponent;
  onSubmit: (value: InitialValuesCustomerPage) => void;
  validationSchema: yup.Schema;
  addressExtraControls?: AddressExtraControls;
}

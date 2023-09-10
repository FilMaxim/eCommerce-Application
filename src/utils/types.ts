import type { initialValuesRegistration } from '../components/forms/inputs/inputsData';
import type * as yup from 'yup';
import type { FieldInputProps } from 'formik';
import type { ComponentType } from 'react';
import type { ButtonProps } from '@mui/material';
import type {
  Image,
  Customer,
  Attribute,
  ProductProjectionPagedQueryResponse,
  Cart
} from '@commercetools/platform-sdk';

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

export interface UseUpdateCustomer {
  onPersonalDataSubmit: (value: InitialValuesCustomerPage) => Promise<void>;
  onPasswordChangeSubmit: (value: InitialValuesCustomerPage) => Promise<void>;
  onAddressDelete: (id: string) => Promise<void>;
  onAddressChangeSubmit: (value: InitialValuesCustomerPage) => Promise<void>;
}

export interface RootState {
  isLogged: boolean;
  cards: ProductsDataInterface[];
  customer: Customer | null;
  extremums: number[];
  catecories: CategoriesList[];
  cart: Cart | null;
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
  fieldSet?: 'shipping' | 'billing';
  formik: FormikProps;
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
  clickHandler: (open: boolean) => void;
}

export type FakeOnSubmit = (values: HandleSubmitWithBoth) => Promise<void>;

export interface PriceTagInterface {
  price: number;
  discount: number;
}

export interface ProductsDataInterface {
  url: string;
  name: string;
  description: string;
  id: string;
  priceTag: PriceTagInterface;
  attributes: Attribute[] | undefined;
  images: Image[] | undefined;
}

export interface InitialProductsStateInterace {
  cards: ProductsDataInterface[];
  extremums: number[];
}

export interface ProductCardInterface extends PriceTagInterface {
  imageUrl: string;
  title: string;
  titleName: string;
  description: string;
  id: string;
  rating: number;
}

export interface CategoriesList {
  name: string;
  id: string;
}

export interface ContainerProps {
  titleName: string;
  titleDescription?: string;
  buttons: Array<ComponentType<ButtonProps>>;
}

export type Mapping = Record<string, string>;

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
  id: string;
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
  children: React.ReactNode | React.ReactNode[];
  titles: string[];
}

export type FormInnerComponent = (editable: boolean, formik: FormikProps) => JSX.Element[] | JSX.Element;

export type AddressExtraControls = (
  editable: boolean,
  initialValues: AddressesInitialValues,
  formik: FormikProps
) => JSX.Element[] | JSX.Element | null;

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
  isEditable?: boolean;
  unsetNewForm?: (value: boolean) => void;
  onDelete?: (id: string) => Promise<void>;
}

export interface AddressComponentProps {
  onSubmit: (values: InitialValuesCustomerPage) => void;
  initialValues: AddressesInitialValues[];
  validationSchema: yup.Schema;
  onDelete?: (id: string) => Promise<void>;
}

export interface CategoriesContextInterface {
  categoryId: string;
  categoryName: string;
  setCategoryId: (id: string) => void;
  setCategoryName: (id: string) => void;
  currentFilter: string[];
  setCurrentFilter: (filter: string[]) => void;
}

export type FetchDataType = (
  quertString?: string | string[] | undefined,
  sort?: string,
  text?: string
) => Promise<ProductProjectionPagedQueryResponse>;

export type NormolizeDataType = (
  productData: ProductProjectionPagedQueryResponse
) => number[] | ProductsDataInterface[];

export interface AttributesList {
  name: string;
  attributes: Attribute[];
}

export interface SelectedAttribute {
  name: string;
  value: string;
}

export interface AddToCartParams {
  cartId: string;
  cartVersion: number;
  productId: string;
  centAmount: number;
  quantity?: number;
}

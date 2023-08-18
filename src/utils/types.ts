export interface TokenInterface {
  accessToken: string;
  tokenExpiration: number;
  refreshToken: string | null;
}

interface UserName {
  firstName: string;
  lastName: string;
}

interface ShippingAddress {
  shippingCountry: string;
  shippingCity: string;
  shippingStreetName: string;
  shippingPostalCode: string;
  shippingStateChecked: boolean
}

interface BillingAddress {
  billingCountry: string;
  billingCity: string;
  billingStreetName: string;
  billingPostalCode: string;
  billingStateChecked: boolean,
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

export interface HandleSubminWithShipping extends LoginInterface, UserName, ShippingAddress {
  date: string;
}

export interface HandleSubminWithBoth extends LoginInterface, UserName, BillingAddress, ShippingAddress {
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

export interface TokensFromLs {
  tokenFromLs: string | null;
  refreshTokenFromLs: string | null;
  expirationFromLs: number;
}

export interface PrivateOutletProps {
  children: JSX.Element;
}

export interface AuthReturnInterface {
  login: (userData: LoginInterface) => Promise<void>;
  isLogged: boolean;
}

export interface AddressFieldComponent {
  label: string;
  name: string;
  placeholder: string;
}

export interface NameInput {
  name: string;
}

export interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

export interface AddressFieldSetProps {
  fieldSet: 'shipping' | 'billing';
}

export interface InitialValues extends HandleSubminWithShipping {
  billingCountry: string;
  billingCity: string;
  billingStreetName: string;
  billingPostalCode: string;
}

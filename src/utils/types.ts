export interface TokenInterface {
  accessToken: string;
  tokenExpiration: number;
  refreshToken?: string;
}

interface UserName {
  firstName: string;
  lastName: string;
}

interface Profile {
  id: string;
  email: string;
}

interface PostalAddress {
  country: string;
  city: string;
  streetName: string;
  postalCode: string;
}

export interface AddressInterface extends UserName, PostalAddress {
  email: string;
}

export interface User extends UserName, Profile {}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface CustomerData extends LoginInterface, UserName {
  dateOfBirth: string;
  addresses: AddressInterface[];
  salutation: string;
}

export interface HandleSubmitInterface extends LoginInterface, UserName, PostalAddress {
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

export interface IAuthData {
  accessToken: string;
  tokenExpiration: number;
}

export interface ICustomerData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  password: string;
  addresses: [
    {
      country: string;
      firstName: string;
      lastName: string;
      streetName: string;
      postalCode: string;
      city: string;
      email: string;
    }
  ];
  salutation: string;
}

export interface ILogoParams {
  className?: string;
}

export interface IBurgerBtnProps {
  clickHandler: (open: boolean) => void;
}

export interface INavBarProps {
  clickHandler: (open: boolean) => void;
}

export interface IBurgerCloseBtnProps {
  clickHandler: (open: boolean) => void;
}

export interface IBurgerMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export interface IHandleSignUpSubmit {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  date: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface IHandleLogInSubmit {
  email: string;
  password: string;
}

export interface IVisibilityIconProps {
  handleVisibility: () => void;
  passwordVisibility: boolean;
}

import type { ReactNode } from 'react';

export type EndpointsInterface = Record<string, string>;

export interface HandleSubmitInterface {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  date?: string;
  street?: string;
  city?: string;
  postalCode?: string;
  country?: string;
}

export interface UserAuthInterface {
  email: string;
  password: string;
}

export interface UserDataInterface {
  authToken: string;
  authRefreshToken: string;
}

export interface AuthResponseInterface {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  refresh_token: string;
}

export interface AuthProviderPropsInterface {
  children: ReactNode;
}

export interface ContextType {
  login?: (userData: UserDataInterface) => void
}

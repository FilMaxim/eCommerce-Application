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
  accessToken: string;
  refreshAccessToken: string;
}

export interface AuthProviderPropsInterface {
  children: ReactNode;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface AuthContextInterface {
  // user: User | null;
  login: (userData: UserDataInterface) => void;
}

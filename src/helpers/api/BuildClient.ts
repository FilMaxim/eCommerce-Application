import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions
} from '@commercetools/sdk-client-v2';
import { ClientApiData, Endpoints } from '../../utils/clientApiData';

const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: Endpoints.auth,
  projectKey: ClientApiData.projectKey,
  credentials: {
    clientId: ClientApiData.clientId,
    clientSecret: ClientApiData.clientSecret
  },
  scopes: ClientApiData.scopes.split(' '),
  fetch
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: Endpoints.base,
  fetch
};

export const buildClientWithPasswordFlow = (username: string, password: string) => {
  const options = {
    host: Endpoints.auth,
    projectKey: ClientApiData.projectKey,
    credentials: {
      clientId: ClientApiData.clientId,
      clientSecret: ClientApiData.clientSecret,
      user: {
        username,
        password
      }
    },
    scopes: ClientApiData.scopes.split(' '),
    fetch
  };

  return new ClientBuilder().withPasswordFlow(options).withHttpMiddleware(httpMiddlewareOptions).build();
};

export const buildClientWithClientCredentialsFlow = () => {
  return new ClientBuilder()
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
};

const oauthMiddlewareOptions: AuthMiddlewareOptions = {
  host: Endpoints.auth,
  projectKey: ClientApiData.projectKey,
  credentials: {
    clientId: ClientApiData.clientId,
    clientSecret: ClientApiData.clientSecret
  },
  scopes: ClientApiData.scopes.split(' '),
  fetch
};

export const buildClientWithAnonymousSessionFlow = () => {
  return new ClientBuilder()
    .withAnonymousSessionFlow(oauthMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
};

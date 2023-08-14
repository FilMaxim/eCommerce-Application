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

export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build();

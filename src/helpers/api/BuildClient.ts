import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions // Required for sending HTTP requests
} from '@commercetools/sdk-client-v2';
import { ClientApiData, Endpoints } from '../../utils/clientApiData';

// Configure authMiddlewareOptions
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

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: Endpoints.base,
  fetch
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build();

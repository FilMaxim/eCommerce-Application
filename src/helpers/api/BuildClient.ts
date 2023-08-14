import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions // Required for sending HTTP requests
} from '@commercetools/sdk-client-v2';
import { clientApiData, endpoints } from '../../utils/clientApiData';

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: endpoints.baseAuthUrl,
  projectKey: clientApiData.projectKey,
  credentials: {
    clientId: clientApiData.clientId,
    clientSecret: clientApiData.clientSecret
  },
  scopes: clientApiData.scopes.split(' '),
  fetch
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: endpoints.baseApiUrl,
  fetch
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build();

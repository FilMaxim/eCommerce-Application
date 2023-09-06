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

// admin

// const projectKey = 'rs-online-shop';

// const authMiddlewareOptions: AuthMiddlewareOptions = {
//   host: 'https://auth.europe-west1.gcp.commercetools.com',
//   projectKey,
//   credentials: {
//     clientId: 'qzlLKLTM9cLktX3nluPW07Lt',
//     clientSecret: 'fbbojz_BQz6lNheOEBFIPKGsGUT0wpdm'
//   },
//   scopes: ['manage_project:rs-online-shop']
// };

// const httpMiddlewareOptions: HttpMiddlewareOptions = {
//   host: 'https://api.europe-west1.gcp.commercetools.com'
// };

//

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

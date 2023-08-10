import axios from 'axios';
import type { UserAuthInterface, AuthResponseInterface } from '../../utils/types';
import { clientApiData, endpoints } from '../../utils/clientApiData';

export const getUserAccessData = async (
  userAuthData: UserAuthInterface
): Promise<AuthResponseInterface> => {
  const { email, password } = userAuthData;
  const { clientId, clientSecret, scopes } = clientApiData;
  const url = endpoints.auth;
  const data = {
    grant_type: 'password',
    scope: scopes,
    username: email,
    password
  };

  try {
    const response = await axios.post(url, data, {
      auth: {
        username: clientId,
        password: clientSecret
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    return response.data;
  } catch (error) {
    if (!(error instanceof Error)) {
      throw error;
    }
    throw new Error(error.message);
  }
};

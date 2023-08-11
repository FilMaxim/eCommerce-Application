import axios from 'axios';
import type { UserAuthInterface, UserDataInterface } from '../../utils/types';
import { clientApiData, Endpoints } from '../../utils/clientApiData';

export const getUserAccessData = async (
  userAuthData: UserAuthInterface
): Promise<UserDataInterface> => {
  const { email, password } = userAuthData;
  const { clientId, clientSecret, scopes } = clientApiData;
  const url = Endpoints.auth;
  const body = {
    grant_type: 'password',
    scope: scopes,
    username: email,
    password
  };

  try {
    const response = await axios.post(url, body, {
      auth: {
        username: clientId,
        password: clientSecret
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    const { data } = response;

    return {
      accessToken: data.access_token,
      refreshAccessToken: data.refresh_token
    };
  } catch (error) {
    if (!(error instanceof Error)) {
      throw error;
    }
    throw new Error(error.message);
  }
};

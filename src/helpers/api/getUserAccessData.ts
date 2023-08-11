import axios from 'axios';
import type { LoginInterface, TokenInterface } from '../../utils/types';
import { clientApiData, endpoints } from '../../utils/clientApiData';

export const getUserAccessData = async (userAuthData: LoginInterface): Promise<TokenInterface> => {
  const { email, password } = userAuthData;
  const { clientId, clientSecret, scopes } = clientApiData;
  const url = endpoints.auth;
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
      refreshToken: data.refresh_token,
      tokenExpiration: data.expires_in
    };
  } catch (error) {
    if (!(error instanceof Error)) {
      throw error;
    }
    throw new Error(error.message);
  }
};

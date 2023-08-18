import axios from 'axios';
import type { TokenInterface } from '../../utils/types';
import { clientApiData, endpoints } from '../../utils/clientApiData';

export const getRefreshedToken = async (refreshToken: string): Promise<Omit<TokenInterface, 'refreshToken'>> => {
  const { clientId, clientSecret } = clientApiData;
  const url = endpoints.refreshToken;
  const body = {
    grant_type: 'refresh_token',
    refresh_token: refreshToken
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
    console.log(data);
    return {
      accessToken: data.access_token,
      tokenExpiration: data.expires_in
    };
  } catch (error) {
    if (!(error instanceof Error)) {
      throw error;
    }
    throw new Error(error.message);
  }
};

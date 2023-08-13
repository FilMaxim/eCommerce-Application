import { clientApiData, endpoints } from '../../utils/clientApiData';
import type { TokenInterface } from '../../utils/types';

export const requestAnonymousToken = async (): Promise<Omit<TokenInterface, 'refreshToken'>> => {
  const { clientId, clientSecret } = clientApiData;

  const response = await fetch(endpoints.registration, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(clientId + ':' + clientSecret)}`
    }
  });

  const data = await response.json();

  return {
    accessToken: data.access_token,
    tokenExpiration: data.expires_in
  };
};

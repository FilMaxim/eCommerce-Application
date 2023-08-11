import { clientApiData, apiPaths } from '../../utils/clientApiData';
import type { IAuthData } from '../../utils/types';

export const requestAnonymousToken = async (): Promise<IAuthData> => {
  const { CLIENT_ID, CLIENT_SECRET } = clientApiData;

  const response = await fetch(apiPaths.AUTORIZATION, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(CLIENT_ID + ':' + CLIENT_SECRET)}`
    }
  });

  const data = await response.json();

  return {
    accessToken: data.access_token,
    tokenExpiration: data.expires_in
  };
};

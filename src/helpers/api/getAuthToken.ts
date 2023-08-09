import { clientApiData, apiPaths } from '../../utils/clientApiData';

export const getAuthToken = async (): Promise<string> => {
  const { CLIENT_ID, CLIENT_SECRET } = clientApiData;

  const response = await fetch(apiPaths.AUTORIZATION, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(CLIENT_ID + ':' + CLIENT_SECRET)}`
    }
  });

  return (await response.json()).access_token;
};

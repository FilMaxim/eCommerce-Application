import { clientApiData, apiPaths } from '../../utils/clientApiData';

interface IAuthData {
  accessToken: string;
  tokenExpiration: number;
}

const tokenRequest = async (): Promise<IAuthData> => {
  const { CLIENT_ID, CLIENT_SECRET } = clientApiData;

  const response = await fetch(apiPaths.AUTORIZATION, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(CLIENT_ID + ':' + CLIENT_SECRET)}`
    }
  });

  const data = await response.json();

  console.log(data);

  return {
    accessToken: data.access_token,
    tokenExpiration: data.expires_in
  };
};

export const getAccessToken = async (): Promise<string> => {
  let accessToken: string | null = localStorage.getItem('accessToken');
  let tokenExpiration: number = Number(localStorage.getItem('tokenExpiration'));

  if (
    accessToken === null ||
    tokenExpiration < Date.now()
  ) {
    const data = await tokenRequest();
    accessToken = data.accessToken;
    tokenExpiration = data.tokenExpiration + Date.now();

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('tokenExpiration', String(tokenExpiration));
  }

  return accessToken;
};

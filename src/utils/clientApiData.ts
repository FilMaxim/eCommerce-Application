export const clientApiData = {
  region: 'europe-west1.gcp',
  projectKey: 'rs-online-shop',
  clientId: 'ePRkvdHt49cmSx6o7H768UR-',
  clientSecret: 'zsXi4gHMmCcNR7hNRAnSqQmyfShmbmG7',
  scopes:
    'create_anonymous_token:rs-online-shop manage_my_quotes:rs-online-shop view_categories:rs-online-shop manage_my_shopping_lists:rs-online-shop manage_my_quote_requests:rs-online-shop manage_my_orders:rs-online-shop manage_my_profile:rs-online-shop manage_my_business_units:rs-online-shop manage_customers:rs-online-shop manage_my_payments:rs-online-shop view_published_products:rs-online-shop'
};

const baseApiUrl = `https://api.${clientApiData.region}.commercetools.com`;
const baseAuthUrl = `https://auth.${clientApiData.region}.commercetools.com`;

export const endpoints = {
  baseApiUrl,
  baseAuthUrl,
  auth: `${baseAuthUrl}/oauth/rs-online-shop/customers/token`,
  customers: `${baseApiUrl}/${clientApiData.projectKey}/customers`,
  registration: `${baseAuthUrl}/token?grant_type=client_credentials&scope=${clientApiData.scopes}`,
  refreshToken: `${baseAuthUrl}/token`
};

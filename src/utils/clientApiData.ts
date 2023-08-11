export const clientApiData = {
  REGION: 'europe-west1.gcp',
  CLIENT_ID: 'ePRkvdHt49cmSx6o7H768UR-',
  CLIENT_SECRET: 'zsXi4gHMmCcNR7hNRAnSqQmyfShmbmG7',
  SCOPES:
    'create_anonymous_token:rs-online-shop manage_my_quotes:rs-online-shop view_categories:rs-online-shop manage_my_shopping_lists:rs-online-shop manage_my_quote_requests:rs-online-shop manage_my_orders:rs-online-shop manage_my_profile:rs-online-shop manage_my_business_units:rs-online-shop manage_customers:rs-online-shop manage_my_payments:rs-online-shop view_published_products:rs-online-shop',
  PROJECT_KEY: 'rs-online-shop',
  clientId: 'ePRkvdHt49cmSx6o7H768UR-',
  clientSecret: 'zsXi4gHMmCcNR7hNRAnSqQmyfShmbmG7',
  scopes:
    'create_anonymous_token:rs-online-shop manage_my_quotes:rs-online-shop view_categories:rs-online-shop manage_my_shopping_lists:rs-online-shop manage_my_quote_requests:rs-online-shop manage_my_orders:rs-online-shop manage_my_profile:rs-online-shop manage_my_business_units:rs-online-shop manage_customers:rs-online-shop manage_my_payments:rs-online-shop view_published_products:rs-online-shop'
};

export const apiPaths = {
  BASE: `https://api.${clientApiData.REGION}.commercetools.com/${clientApiData.PROJECT_KEY}`,
  CUSTOMERS: `https://api.${clientApiData.REGION}.commercetools.com/${clientApiData.PROJECT_KEY}/customers`,
  AUTORIZATION: `https://auth.${clientApiData.REGION}.commercetools.com/oauth/token?grant_type=client_credentials&scope=${clientApiData.SCOPES}`
};

export enum Endpoints {
  auth = 'https://auth.europe-west1.gcp.commercetools.com/oauth/rs-online-shop/customers/token'
}

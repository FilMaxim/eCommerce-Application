export const getCheckboxLabel = (name: string): string => {
  if (name === 'defaultShippingAddress') {
    return 'default shipping';
  }
  if (name === 'defaultBillingAddress') {
    return 'default billing';
  }
  if (name === 'shippingStateChecked') {
    return 'shipping';
  }
  if (name === 'billingStateChecked') {
    return 'billing';
  }
  return name;
};

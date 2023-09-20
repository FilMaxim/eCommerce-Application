export const getCheckboxLabel = (name: string): string => {
  switch (name) {
    case 'defaultShippingAddress':
      return 'default shipping';
    case 'defaultBillingAddress':
      return 'default billing';
    case 'shippingStateChecked':
      return 'shipping';
    case 'billingStateChecked':
      return 'billing';
    default:
      return name;
  }
};

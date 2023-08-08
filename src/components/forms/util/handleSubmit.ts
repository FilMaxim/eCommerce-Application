export const handleSubmit = (values: {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  date?: string;
  street?: string;
  city?: string;
  postalCode?: string;
  country?: string;
}) => {
  console.log('submit', values);
};

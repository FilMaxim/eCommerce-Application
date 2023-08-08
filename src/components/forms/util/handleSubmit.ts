interface IHandleSubmit {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  date?: string;
  street?: string;
  city?: string;
  postalCode?: string;
  country?: string;
}

export const handleSubmit = (values: IHandleSubmit) => {
  console.log('submit', values);
};

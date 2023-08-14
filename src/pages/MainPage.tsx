import { getCustomers } from '../helpers/api/apiRoot';
import { useAuth } from '../helpers/hooks';

export const MainPage = () => {
  const { isLogged } = useAuth();
  console.log(
    getCustomers().then((res) => {
      console.log(res);
    })
  );
  const content = isLogged ? 'Welcome to main page' : 'You are not authorized!';
  return (
    <>
      <p>{content}</p>
    </>
  );
};

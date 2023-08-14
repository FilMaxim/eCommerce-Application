import { useAuth } from '../helpers/hooks';

export const MainPage = () => {
  const { isLogged } = useAuth();
  const content = isLogged ? 'Welcome to main page' : 'You are not authorized!';
  return (
    <>
      <p>{content}</p>
    </>
  );
};

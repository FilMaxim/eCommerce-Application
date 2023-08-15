import { useSelector } from 'react-redux';
import type { RootState } from '../utils/types';

export const MainPage = () => {
  const isLogged = useSelector((state: RootState) => state.isLogged);
  const content = isLogged ? 'Welcome to main page' : 'You are not authorized!';
  return (
    <>
      <p>{content}</p>
    </>
  );
};

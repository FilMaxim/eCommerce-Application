import { useSelector } from 'react-redux';
import type { RootState } from '../utils/types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const MainPage = () => {
  const isLogged = useSelector((state: { authData: RootState }) => state.authData.isLogged);
  const content = isLogged ? 'Welcome to main page' : 'You are not authorized!';
  return (
    <>
      <p>{content}</p>
    </>
  );
};

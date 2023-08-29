import { useSelector } from 'react-redux';
import type { RootState } from '../utils/types';
import { getProduct } from '../helpers/api/apiRoot';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { links } from '../utils/links';

export const MainPage = () => {
  const isLogged = useSelector((state: { authData: RootState }) => state.authData.isLogged);
  const content = isLogged ? 'Welcome to main page' : 'You are not authorized!';
  return (
    <>
      <p>{content}</p>

      <Link
        to={links.product.path}
        className="text-link-color hover:text-hover-link"
      >
        <button
          onClick={() => {
            void getProduct('e996ba5d-4c7d-4a2e-8635-1d68bdfb21df');
          }}
        >
          Enter
        </button>
      </Link>
    </>
  );
};

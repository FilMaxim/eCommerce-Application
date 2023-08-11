import { Link } from 'react-router-dom';
import error404 from '../assets/404.png';
import { routes } from '../utils/routes';
export const NotFoundPage = () => (
  <div className="flex flex-col items-center pb-5">
    <img
      className="max-w-sm"
      src={error404}
      alt="logo"
    />
    <p className="mt-3 text-center text-[30px]">Sorry, the page you requested was not found...</p>
    <Link
      to={routes.mainPagePath()}
      className="text-[30px] text-link-color"
    >
      Go To Home
    </Link>
  </div>
);

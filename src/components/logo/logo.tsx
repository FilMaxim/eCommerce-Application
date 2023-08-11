import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';
import logo from '../../assets/logo.png';

interface ILogoParams {
  className?: string;
}

export const Logo = ({ className }: ILogoParams) => {
  return (
    <Link
      to={routes.mainPagePath()}
      className={`${className ?? ''} -m-1.5 p-1.5`}
    >
      <span className="sr-only">Our shop name should be there</span>

      <img
        className="h-14 w-auto"
        src={logo}
        alt="logo"
      />
    </Link>
  );
};

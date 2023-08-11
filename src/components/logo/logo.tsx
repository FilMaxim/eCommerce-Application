import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { routes } from '../../utils/routes';
import type { ILogoParams } from '../../utils/types';

export const Logo = ({ className }: ILogoParams) => {
  return (
    <Link
      to={routes.mainPagePath()}
      className={`${className ?? ''} -m-1.5 p-1.5`}
    >
      <span className="sr-only">Our shop name should be there</span>

      <img
        className="h-8 w-auto"
        src={logo}
        alt="logo"
      />
    </Link>
  );
};

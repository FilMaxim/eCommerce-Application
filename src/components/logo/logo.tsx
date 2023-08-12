import { Link } from 'react-router-dom';
import { NavRoutes } from '../../utils/routes';
import type { LogoParams } from '../../utils/types';
import logo from '../../assets/logo.png';

export const Logo = ({ className }: LogoParams) => {
  return (
    <Link
      to={NavRoutes.mainPagePath}
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

import { Link } from 'react-router-dom';
import { NavGroup } from '../header/NavBar/NavGroup';
import { Logo } from '../logo/logo';

export const Footer = () => {
  return (
    <footer>
      <Logo />
      <NavGroup />
      <Link to={'https://rs.school/'}>
        <img
          className="mx-5 mb-1 w-[100px]"
          src="https://rs.school/images/rs_school_js.svg"
          alt="rs_school_js"
        />
      </Link>
    </footer>
  );
};

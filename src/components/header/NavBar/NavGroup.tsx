import { links } from '../../../utils/links';
import { Link } from 'react-router-dom';

export const NavGroup = () => {
  const linksData = [links.main, links.catalog, links.about, links.contacts];
  return (
    <>
      {linksData.map((item) => (
        <li
          key={item.text}
          className="hover:opacity-70"
        >
          <Link to={item.path}>{item.text}</Link>
        </li>
      ))}
    </>
  );
};

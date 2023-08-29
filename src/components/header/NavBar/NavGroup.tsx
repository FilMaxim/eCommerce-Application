import { links } from '../../../utils/links';
import { Link } from 'react-router-dom';

export const NavGroup = () => {
  const linksData = [links.main, links.about, links.contacts, links.catalog];
  return (
    <>
      {linksData.map((item) => (
        <li key={item.text}>
          <Link to={item.path}>{item.text}</Link>
        </li>
      ))}
    </>
  );
};

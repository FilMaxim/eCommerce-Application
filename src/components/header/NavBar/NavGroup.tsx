import { links } from '../../../utils/links';
import { Link } from 'react-router-dom';
import type { ClickHandlerInterface } from '../../../utils/types';

export const NavGroup = ({ clickHandler }: ClickHandlerInterface) => {
  const linksData = [links.main, links.catalog, links.about];
  return (
    <>
      {linksData.map((item) => (
        <li key={item.text}>
          <Link
            {...(clickHandler !== undefined
              ? {
                  onClick: () => {
                    clickHandler(false);
                  }
                }
              : {})}
            to={item.path}
            className="hover:opacity-70"
          >
            {item.text}
          </Link>
        </li>
      ))}
    </>
  );
};

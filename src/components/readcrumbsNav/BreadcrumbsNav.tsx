import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { NavRoutes } from '../../utils/routes';

export const BreadcrumbsNav = () => {
  const { categoryName } = useCategoryContext();
  return (
    <div className="inline-block sm:my-4 sm:ml-[18rem] ">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          to={NavRoutes.catalogPage}
          className="text-black transition-all hover:text-secondary"
        >
          Catalog
        </Link>
        <span>{categoryName}</span>
      </Breadcrumbs>
    </div>
  );
};

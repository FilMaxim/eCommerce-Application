import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { NavRoutes } from '../../utils/routes';

export const BreadcrumbsNav = () => {
  const { categoryName } = useCategoryContext();
  const isCategorySelected = Boolean(categoryName);

  return (
    <div className="inline-block sm:my-4 sm:ml-[18rem] ">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          to={NavRoutes.catalogPage}
          className="text-black transition-all hover:text-secondary"
        >
          Catalog
        </Link>
        <span>{isCategorySelected ? categoryName : ''}</span>
      </Breadcrumbs>
    </div>
  );
};

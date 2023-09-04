import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavRoutes } from '../../utils/routes';
import { useCategoryId } from '../../hooks/useCategoryId';

export const BreadcrumbsNav = () => {
  const { category } = useCategoryId();
  return (
    <div className="inline-block sm:my-4 sm:ml-[18rem] ">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          to={NavRoutes.catalogPage}
          className="text-black transition-all hover:text-secondary"
        >
          Catalog
        </Link>
        <span>{category?.name}</span>
      </Breadcrumbs>
    </div>
  );
};

import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavRoutes } from '../../utils/routes';
import { useCategoryId } from '../../hooks/useCategoryId';

export const BreadcrumbsNav = () => {
  const { category } = useCategoryId();
  return (
    <div className="sm:my-4 sm:ml-[18rem] inline-block ">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={NavRoutes.catalogPage} className='text-black hover:text-secondary transition-all'>Catalog</Link>
        <span>{category?.name}</span>
      </Breadcrumbs>
    </div>
  );
};

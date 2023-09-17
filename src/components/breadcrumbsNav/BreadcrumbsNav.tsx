import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { NavRoutes } from '../../utils/routes';

export const BreadcrumbsNav = ({ children }: { children: string | undefined }) => {
  const { categoryName, setCategoryName, setCategoryId, setCurrentFilter } = useCategoryContext();
  const isCategorySelected = Boolean(categoryName);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={isCategorySelected ? '/' : ''}
    >
      <Link
        to={NavRoutes.catalogPage}
        className="text-black transition-all hover:text-secondary"
        onClick={() => {
          setCategoryName('');
          setCategoryId('');
          setCurrentFilter([]);
        }}
      >
        <p className="text-lg font-bold text-secondary">{children}</p>
      </Link>
      <span>{isCategorySelected ? categoryName : ''}</span>
    </Breadcrumbs>
  );
};

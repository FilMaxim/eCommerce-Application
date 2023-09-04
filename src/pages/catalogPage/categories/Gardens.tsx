import { useCategoryId } from '../../../hooks/useCategoryId';
import { Catalog } from '../CatalogPage';

export const Gardens = () => {
  const { category } = useCategoryId();
  return <Catalog category={category} />;
};

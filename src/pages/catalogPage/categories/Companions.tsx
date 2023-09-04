import { useCategoryId } from '../../../hooks/useCategoryId';
import { Catalog } from '../CatalogPage';

export const Companions = () => {
  const { category } = useCategoryId();
  return <Catalog category={category} />;
};

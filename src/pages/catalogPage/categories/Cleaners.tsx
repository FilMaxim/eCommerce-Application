import { useCategoryId } from '../../../hooks/useCategoryId';
import { Catalog } from '../CatalogPage';

export const Cleaners = () => {
  const { category } = useCategoryId();
  return <Catalog category={category} />;
};

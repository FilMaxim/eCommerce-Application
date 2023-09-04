import { useCategoryId } from '../../../hooks/useCategoryId';
import { Catalog } from '../CatalogPage';

export const Kitchens = () => {
  const { category } = useCategoryId();
  return <Catalog category={category} />;
};

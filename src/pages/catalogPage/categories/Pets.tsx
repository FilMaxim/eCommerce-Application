import { useCategoryId } from '../../../hooks/useCategoryId';
import { Catalog } from '../CatalogPage';

export const Pets = () => {
  const { category } = useCategoryId();
  return <Catalog category={category} />;
};

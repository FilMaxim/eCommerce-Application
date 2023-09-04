import { useCategoryId } from '../../../hooks/useCategoryId';
import { Catalog } from '../CatalogPage';

export const Deliveries = () => {
  const { category } = useCategoryId();
  return <Catalog category={category} />;
};

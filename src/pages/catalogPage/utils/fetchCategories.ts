import { getCategories } from '../../../helpers/api/apiRoot';
import type { CategoriesList } from '../../../utils/types';

export const fetchCategories = async (): Promise<CategoriesList[]> => {
  const categoriesData = await getCategories();
  const categories = categoriesData.results.map((item) => {
    const [name] = Object.values(item.name);
    const { id } = item;

    return { name, id };
  });

  return categories;
};

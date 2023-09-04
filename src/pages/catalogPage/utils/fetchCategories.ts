import type { Dispatch } from 'react';
import { getCategories } from '../../../helpers/api/apiRoot';
import type { CategoriesList } from '../../../utils/types';

export const fetchCategories = async (
  setCategoryList: Dispatch<React.SetStateAction<CategoriesList[]>>,
  setCategoriesData: Dispatch<React.SetStateAction<CategoriesList[]>>
): Promise<void> => {
  const categoriesData = await getCategories();
  const categories = categoriesData.results.map((item) => {
    const [name] = Object.values(item.name);
    const { id } = item;

    return { name, id };
  });
  setCategoryList(categories);
  setCategoriesData(categories);
};

import type { Dispatch } from 'react';
import { getCategories } from '../../../helpers/api/apiRoot';

export const fetchCategories = async (setCategoryList: Dispatch<React.SetStateAction<string[]>>) => {
  const categoriesData = await getCategories();
  const categories = categoriesData.results.map((item) => {
    const [name] = Object.values(item.name);
    return name;
  });

  setCategoryList([...categories]);
};

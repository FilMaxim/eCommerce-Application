import { createContext } from 'react';
import type { CategoriesContextInterface } from '../utils/types';

export const CategoriesContext = createContext<CategoriesContextInterface>({
  categoryId: '',
  categoryName: '',
  setCategoryId: (): void => {},
  setCategoryName: (): void => {},
  currentFilter: [],
  setCurrentFilter: (): void => {}
});

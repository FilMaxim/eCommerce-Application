import { createContext } from 'react';
import type { CategoriesContextInterface, Category } from '../utils/types';

export const CategoriesContext = createContext<CategoriesContextInterface>({
  category: null,
  setCategory: (category: Category | null): void => {}
});

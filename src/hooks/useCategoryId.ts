import { useContext } from 'react';
import { CategoriesContext } from '../contexts';
import type { CategoriesContextInterface } from '../utils/types';

export const useCategoryContext = (): CategoriesContextInterface => useContext(CategoriesContext);

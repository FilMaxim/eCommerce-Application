import { useContext } from 'react';
import { CategoriesContext } from '../contexts';
import type { CategoriesContextInterface } from '../utils/types';

export const useCategoryId = (): CategoriesContextInterface => useContext(CategoriesContext);

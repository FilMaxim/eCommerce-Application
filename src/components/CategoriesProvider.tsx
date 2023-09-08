import { CategoriesContext } from '../contexts';
import { useState, useMemo, type ReactNode } from 'react';
import type { CategoriesContextInterface } from '../utils/types';

export const CategoriesProveder = ({ children }: { children: ReactNode }) => {
  const [categoryId, setCategoryId] = useState<string>('');
  const [categoryName, setCategoryName] = useState<string>('');
  const [currentFilter, setCurrentFilter] = useState<string[]>([]);
  const category: CategoriesContextInterface = useMemo(
    () => ({
      categoryId,
      categoryName,
      setCategoryId,
      setCategoryName,
      currentFilter,
      setCurrentFilter
    }),
    [categoryId, currentFilter, categoryName]
  );

  return <CategoriesContext.Provider value={category}>{children}</CategoriesContext.Provider>;
};

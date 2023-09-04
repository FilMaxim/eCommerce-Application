import { CategoriesContext } from '../contexts';
import { useState, useMemo, type ReactNode } from 'react';
import type { CategoriesContextInterface } from '../utils/types';

export const CategoriesProveder = ({ children }: { children: ReactNode }) => {
  const [categoryId, setCategoryId] = useState<string>('');
  const [currentFilter, setCurrentFilter] = useState<string[]>([]);
  const category: CategoriesContextInterface = useMemo(
    () => ({
      categoryId,
      setCategoryId,
      currentFilter,
      setCurrentFilter
    }),
    [categoryId, currentFilter]
  );

  return <CategoriesContext.Provider value={category}>{children}</CategoriesContext.Provider>;
};

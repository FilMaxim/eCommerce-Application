import { CategoriesContext } from '../contexts';
import { useState, useMemo, type ReactNode } from 'react';
import type { CategoriesContextInterface } from '../utils/types';

export const CategoriesProveder = ({ children }: { children: ReactNode }) => {
  const [categoryId, setCategoryId] = useState<string>('');

  const category: CategoriesContextInterface = useMemo(
    () => ({
      categoryId,
      setCategoryId
    }),
    [categoryId]
  );

  return <CategoriesContext.Provider value={category}>{children}</CategoriesContext.Provider>;
};

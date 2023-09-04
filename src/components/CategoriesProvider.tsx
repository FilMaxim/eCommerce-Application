import { CategoriesContext } from '../contexts';
import { useState, useMemo, type ReactNode } from 'react';
import type { CategoriesContextInterface, Category } from '../utils/types';

export const CategoriesProveder = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<Category | null>(null);

  const categoryContext: CategoriesContextInterface = useMemo(
    () => ({
      category,
      setCategory
    }),
    [category]
  );

  return <CategoriesContext.Provider value={categoryContext}>{children}</CategoriesContext.Provider>;
};

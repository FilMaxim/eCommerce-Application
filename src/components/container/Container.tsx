import type { CategoriesList, ContainerProps } from '../../utils/types';
import { CategoryCard } from '../cards/categoryCard/CategoryCard';
import { useEffect, useState } from 'react';
import { fetchFilteredProducts } from '../../helpers/api/apiRoot';
import { useDispatch } from 'react-redux';
import { useCategoryId } from '../../hooks/useCategoryId';
import { updateProductsData, updateExtremumsData } from '../../pages/catalogPage/utils/updateData';
import { getExtremums } from '../../pages/catalogPage/utils/getExtremums';
import { normalizeData } from '../../pages/catalogPage/utils/normalizeData';
import { BreadcrumbsNav } from '../breadcrumbs/Breadcrumbs';

export const Container = ({ titleName, titleDescription, categoriesList }: ContainerProps) => {
  const [currentId, setId] = useState<string>('');
  const { category, setCategory } = useCategoryId();
  const dispatch = useDispatch();
  const isSelectedCategory = Boolean(category);

  useEffect(() => {
    const handleCategoryCardClick = async (id: string) => {
      setId(category?.id ?? '');
      await updateExtremumsData(dispatch, fetchFilteredProducts, getExtremums, `categories.id:"${id}"`);
      await updateProductsData(dispatch, fetchFilteredProducts, normalizeData, `categories.id:"${id}"`);
    };

    if (currentId !== '') {
      handleCategoryCardClick(currentId).catch((error) => {
        throw error;
      });
    }
    return (): void => {
      setId('');
    };
  }, [currentId, category, dispatch]);

  const Categories = ({ categoriesList }: { categoriesList: CategoriesList[] }) => (
    <div className="m-auto flex max-w-7xl flex-col gap-2 p-4 lg:px-8">
      <div className="flex items-center gap-4">
        <div className="h-10 w-5 rounded bg-secondary"></div>
        <p className="text-lg font-bold text-secondary">{titleName}</p>
      </div>
      <p className="mb-2 text-2xl font-bold sm:text-3xl">{titleDescription}</p>
      <div className="flex max-w-[90%] gap-2 self-center overflow-auto rounded border p-1 md:border-none">
        {categoriesList.map((category) => {
          const { name, id } = category;
          return (
            <CategoryCard
              key={id}
              category={name}
              callback={() => {
                setId(id);
                setCategory(category);
              }}
            />
          );
        })}
      </div>
    </div>
  );

  return isSelectedCategory ? <BreadcrumbsNav /> : <Categories categoriesList={categoriesList} />;
};

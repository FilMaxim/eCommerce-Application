import type { ContainerProps } from '../../utils/types';
import { CategoryCard } from '../cards/categoryCard/CategoryCard';
import { useEffect, useState } from 'react';
import { fetchFilteredProducts } from '../../helpers/api/apiRoot';
import { useDispatch } from 'react-redux';
import { useCategoryContext } from '../../hooks/useCategoryId';
import { updateProductsData, updateExtremumsData } from '../../pages/catalogPage/utils/updateData';
import { getExtremums } from '../../pages/catalogPage/utils/getExtremums';
import { normalizeData } from '../../pages/catalogPage/utils/normalizeData';
import { SearchInput } from '../searchInput/searchInput';

export const Container = ({ titleName, titleDescription, categoriesList }: ContainerProps) => {
  // const [categoryId, setCategoryId] = useState<string>('');
  const [currentId, setId] = useState<string>('');
  const { categoryId, setCategoryId } = useCategoryContext();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleCategoryCardClick = async (id: string) => {
      setId(categoryId);
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
  }, [currentId, categoryId, dispatch]);

  return (
    <div className="m-auto flex max-w-7xl flex-col gap-2 p-4 lg:px-8">
      <div className='flex justify-between'>
        <div className="flex items-center gap-4">
        <div className="h-10 w-5 rounded bg-secondary"></div>
        <p className="text-lg font-bold text-secondary">{titleName}</p>
        </div>
        <SearchInput />
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
                setCategoryId(id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

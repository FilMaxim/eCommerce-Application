import styles from './Container.module.scss';
import type { ContainerProps } from '../../utils/types';
import { CategoryCard } from '../cards/categoryCard/CategoryCard';
import { useEffect, useState } from 'react';
import { fetchFilteredProducts } from '../../helpers/api/apiRoot';
import { useDispatch } from 'react-redux';
import { useCategoryId } from '../../hooks/useCategoryId';
import { updateProductsData, updateExtremumsData } from '../../pages/catalogPage/utils/updateData';
import { getExtremums } from '../../pages/catalogPage/utils/getExtremums';
import { normalizeData } from '../../pages/catalogPage/utils/normalizeData';

export const Container = ({ titleName, titleDescription, buttons, categoriesList }: ContainerProps) => {
  // const [categoryId, setCategoryId] = useState<string>('');
  const [currentId, setId] = useState<string>('');
  const { categoryId, setCategoryId } = useCategoryId();
  const dispatch = useDispatch();

  console.log(categoryId);

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
    <div className="flex flex-col gap-2 py-4">
      <p className={styles.name}>{titleName}</p>
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

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
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/scrollbar';

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
      <div className="flex max-w-[90%] justify-center gap-2 overflow-auto border-b border-t p-1 sm:border-none">
        {/* <Swiper
          spaceBetween={30}
          slidesPerView={3}
          modules={[Scrollbar, A11y]}
          scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        > */}
        {categoriesList.map((category) => {
          const { name, id } = category;
          return (
            // <SwiperSlide key={id}>
            <CategoryCard
              key={id}
              category={name}
              callback={() => {
                setId(id);
                setCategoryId(id);
              }}
            />
            // </SwiperSlide>
          );
        })}
        {/* </Swiper> */}
      </div>
    </div>
  );
};

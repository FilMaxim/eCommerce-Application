// import styles from './CatalogPage.module.scss';
import { useEffect, useState } from 'react';
import { Container } from '../../components/container/Container';
import { ProductCard } from '../../components/cards/productCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import type { CategoriesList, RootState } from '../../utils/types';
import { ArrowButtonGroup } from '../../components/buttons/ArrowButtonsGroup';
import { updateExtremumsData, updateProductsData } from './utils/updateData';
import { fetchCategories } from './utils/fetchCategories';
import { FilterBar } from '../../components/filter/FilterBar';
import { fetchProducts } from '../../helpers/api/apiRoot';
import { CategoriesProveder } from '../../components/CategoriesProvider';
import { trimText } from './utils/trimText';
import { normalizeData } from './utils/normalizeData';
import { getExtremums } from './utils/getExtremums';

export const CatalogPage = () => {
  const [categoryList, setCategoryList] = useState<CategoriesList[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategories(setCategoryList).catch((error) => {
      console.error(error);
    });

    updateProductsData(dispatch, fetchProducts, normalizeData).catch((error) => {
      console.error(error);
    });

    updateExtremumsData(dispatch, fetchProducts, getExtremums).catch((error) => {
      console.error(error);
    });
  }, [dispatch]);
  const cardsData = useSelector((state: { productsData: RootState }) => state.productsData.cards);
  return (
    <CategoriesProveder>
        <Container
          titleName="Categories"
          titleDescription="Browse By Category"
          buttons={[ArrowButtonGroup]}
          categoriesList={categoryList}
        />
        <div className='flex flex-wrap gap-4'>
          {cardsData.map((item, index) => {
            const { url, name, description, priceTag, id } = item;
            const { price, discount } = priceTag;
            const formattedDescription = trimText(description);
            return (
              <ProductCard
                imageUrl={url}
                title={name}
                titleName={name}
                description={formattedDescription}
                key={`cardId}-${index}`}
                id={id}
                price={price}
                discount={discount}
              />
            );
          })}
        </div>
        <FilterBar />
    </CategoriesProveder>
  );
};

import styles from './CatalogPage.module.scss';
import { useEffect, useState } from 'react';
import { Container } from '../../components/container/Container';
import { ProductCard } from '../../components/cards/productCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../utils/types';
import { ArrowButtonGroup } from '../../components/buttons/ArrowButtonsGroup';
import { fetchProducts } from './utils/fetchProducts';
import { fetchCategories } from './utils/fetchCategories';

export const CatalogPage = () => {
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategories(setCategoryList).catch((error) => {
      console.error(error);
    });
    fetchProducts(dispatch).catch((error) => {
      console.error(error);
    });
  }, [dispatch]);

  const cardsData = useSelector((state: { productsData: RootState }) => state.productsData.cards);

  return (
    <div className={styles.catalog}>
      <Container
        titleName="Categories"
        titleDescription="Browse By Category"
        buttons={[ArrowButtonGroup]}
        categoriesList={categoryList}
      />
      <div className={styles.list}>
        {cardsData.map((item, index) => {
          const { url, name, description, priceTag } = item;
          const { price, discount } = priceTag;
          return (
            <ProductCard
              imageUrl={url}
              title={name}
              titleName={name}
              description={description}
              key={`cardId}-${index}`}
              price={price}
              discount={discount}
            />
          );
        })}
      </div>
    </div>
  );
};

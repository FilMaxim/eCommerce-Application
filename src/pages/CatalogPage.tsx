import { useEffect, useState } from 'react';
import { Container } from '../components/Container';
import { ProductCard } from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../utils/types';
import { ArrowButtonGroup } from '../components/buttons/ArrowButtonsGroup';
import { fetchProducts } from './pagesUtils/fetchProducts';
import { fetchCategories } from './pagesUtils/fetchCategories';

export const CatalogPage = () => {
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategories(setCategoryList);
    fetchProducts(dispatch);
  }, []);

  const cardsData = useSelector((state: { productsData: RootState }) => state.productsData.cards);

  return (
    <div className="main-catalog">
      <Container
        titleName="Categories"
        titleDescription="Browse By Category"
        buttons={[ArrowButtonGroup]}
        categoriesList={categoryList}
      />
      <div className="calalog-list">
        {cardsData.map((item, index) => {
          const { url, name, description } = item;
          return (
            <ProductCard
              imageUrl={url}
              title={name}
              titleName={name}
              description={description}
              key={`${item}-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

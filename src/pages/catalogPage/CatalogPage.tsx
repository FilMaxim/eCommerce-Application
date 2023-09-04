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
import { TemporaryDrawer } from '../../components/drawer/Drawer';

export const CatalogPage = () => {
  const [categoryList, setCategoryList] = useState<CategoriesList[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategories(setCategoryList).catch((error) => {
      throw error;
    });

    updateProductsData(dispatch, fetchProducts, normalizeData).catch((error) => {
      throw error;
    });

    updateExtremumsData(dispatch, fetchProducts, getExtremums).catch((error) => {
      throw error;
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
      <div className="pl-4 sm:hidden">
        <TemporaryDrawer>
          <FilterBar />
        </TemporaryDrawer>
      </div>
      <div className="flex">
        <div className="hidden sm:block">
          <FilterBar />
        </div>
        <div className="m-auto flex flex-wrap justify-center gap-4">
          {cardsData.map((item) => {
            const { url, name, description, priceTag, id } = item;
            const { price, discount } = priceTag;
            const formattedDescription = trimText(description);
            return (
              <ProductCard
                imageUrl={url}
                title={name}
                titleName={name}
                description={formattedDescription}
                key={id}
                id={id}
                price={price}
                discount={discount}
              />
            );
          })}
        </div>
      </div>
    </CategoriesProveder>
  );
};

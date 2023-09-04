// import styles from './CatalogPage.module.scss';
import '../../i18n';
import { useEffect, useMemo, useState } from 'react';
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
import { useCategoryContext } from '../../hooks/useCategoryId';
import { SortBar } from './utils/SortBar';

export const CatalogPage = () => {
  const [categoryList, setCategoryList] = useState<CategoriesList[]>([]);
  const dispatch = useDispatch();

  const { currentFilter } = useCategoryContext();
  const catecoryFilter = currentFilter.length > 0 ? `categories.id:"${String(currentFilter)}"` : '';
  const fld = useMemo(() => [catecoryFilter], [catecoryFilter]);

  useEffect(() => {
    fetchCategories(setCategoryList).catch((error) => {
      console.error(error);
    });

    updateProductsData(dispatch, fetchProducts, normalizeData, fld).catch((error) => {
      console.error(error);
    });

    updateExtremumsData(dispatch, fetchProducts, getExtremums).catch((error) => {
      console.error(error);
    });
  }, [dispatch, fld]);

  const cardsData = useSelector((state: { productsData: RootState }) => state.productsData.cards);

  return (
    <CategoriesProveder>
      <Container
        titleName="Categories"
        titleDescription="Browse By Category"
        buttons={[ArrowButtonGroup]}
        categoriesList={categoryList}
      />
      <div className="flex sm:pl-[18rem]">
        <div className="pl-4 sm:hidden">
          <TemporaryDrawer>
            <FilterBar />
          </TemporaryDrawer>
        </div>
        <SortBar />
      </div>
      <div className="flex">
        <div className="hidden sm:block">
          <FilterBar />
        </div>
        <div className="m-auto flex flex-wrap justify-center gap-4">
          {cardsData.map((item) => {
            const { url, name, description, priceTag, id, attributes } = item;
            const rating = attributes?.find((obj) => obj.name === 'rating');
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
                rating={rating?.value}
              />
            );
          })}
        </div>
      </div>
    </CategoriesProveder>
  );
};

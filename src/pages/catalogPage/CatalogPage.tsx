import { useEffect, useState } from 'react';
import { Container } from '../../components/container/Container';
import { ProductCard } from '../../components/cards/productCard/ProductCard';
import { useDispatch } from 'react-redux';
import type { CategoriesList, ProductsDataInterface } from '../../utils/types';
import { ArrowButtonGroup } from '../../components/buttons/ArrowButtonsGroup';
import { updateExtremumsData, updateProductsData } from './utils/updateData';
import { fetchCategories } from './utils/fetchCategories';
import { FilterBar } from '../../components/filter/FilterBar';
import { fetchProducts, fetchFilteredProducts } from '../../helpers/api/apiRoot';
import { trimText } from './utils/trimText';
import { normalizeData } from './utils/normalizeData';
import { getExtremums } from './utils/getExtremums';
import { TemporaryDrawer } from '../../components/drawer/Drawer';
import { setCategoriesData } from '../../slices/categoriesSlice';
import { useCategoryId } from '../../hooks/useCategoryId';

export const Catalog = () => {
  const [categoryList, setCategoryList] = useState<CategoriesList[]>([]);
  const dispatch = useDispatch();
  const [cards, setCards] = useState<ProductsDataInterface[]>([]);
  const { category } = useCategoryId();
  const catecoryFilter = category !== null ? `categories.id:"${category.id}"` : '';

  useEffect(() => {
    const handleRelease = async (catecoryFilter: string) => {
      const data = await fetchFilteredProducts(catecoryFilter);
      const cards = normalizeData(data);
      setCards(cards);
    };

    fetchCategories(setCategoryList, setCategoriesData).catch((error) => {
      throw error;
    });

    updateProductsData(dispatch, fetchProducts, normalizeData, setCards)
      .then(() => {
        if (category !== null) {
          handleRelease(catecoryFilter).catch((error) => {
            throw error;
          });
        }
      })
      .catch((error) => {
        throw error;
      });

    updateExtremumsData(dispatch, fetchProducts, getExtremums).catch((error) => {
      throw error;
    });
  }, [dispatch, setCards, catecoryFilter, category]);

  return (
    <>
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
          {cards.map((item) => {
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
    </>
  );
};

export const CatalogPage = () => {
  const { setCategory } = useCategoryId();

  useEffect(() => {
    setCategory(null);
  });

  return (
    <>
      <Catalog />;
    </>
  );
};

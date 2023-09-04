import { useEffect, useState } from 'react';
import { Container } from '../../components/container/Container';
import { ProductCard } from '../../components/cards/productCard/ProductCard';
import { useDispatch } from 'react-redux';
import type { CategoriesList, ProductsDataInterface } from '../../utils/types';
import { ArrowButtonGroup } from '../../components/buttons/ArrowButtonsGroup';
import { /* updateExtremumsData, */ updateProductsData } from './utils/updateData';
import { fetchCategories } from './utils/fetchCategories';
import { FilterBar } from '../../components/filter/FilterBar';
import { fetchProducts, fetchFilteredProducts } from '../../helpers/api/apiRoot';
import { trimText } from './utils/trimText';
import { normalizeData } from './utils/normalizeData';
import { getExtremums } from './utils/getExtremums';
import { TemporaryDrawer } from '../../components/drawer/Drawer';
import { setCategoriesData } from '../../slices/categoriesSlice';
import { useCategoryId } from '../../hooks/useCategoryId';
import { setExtremums } from '../../slices/ProductCardsSlice';

export const Catalog = ({ category }: { category: CategoriesList | null }) => {
  const [categoryList, setCategoryList] = useState<CategoriesList[]>([]);
  const dispatch = useDispatch();
  const [cards, setCards] = useState<ProductsDataInterface[]>([]);

  useEffect(() => {
    const handleRelease = async (catecoryFilter: string) => {
      const data = await fetchFilteredProducts(catecoryFilter);
      const cards = normalizeData(data);
      setCards(cards);

      const extremums = getExtremums(data);
      const setExtremumsData = setExtremums(extremums);
      dispatch(setExtremumsData);
    };

    fetchCategories(setCategoryList, setCategoriesData).catch((error) => {
      throw error;
    });

    if (category !== null) {
      handleRelease(`categories.id:"${category.id}"`).catch((error) => {
        throw error;
      });
    } else {
      updateProductsData(dispatch, fetchProducts, setCards).catch((error) => {
        throw error;
      });
    }

    // updateExtremumsData(dispatch, fetchProducts, getExtremums).catch((error) => {
    //   throw error;
    // });
  }, [dispatch, setCards, category]);

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
          <FilterBar
            productsData={cards}
            category={category}
            setCards={setCards}
          />
        </TemporaryDrawer>
      </div>
      <div className="flex items-start">
        <div className="hidden sm:block">
          <FilterBar
            productsData={cards}
            category={category}
            setCards={setCards}
          />
        </div>
        <div className="mx-auto flex flex-wrap justify-center gap-4 sm:mt-6">
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

  setCategory(null);

  return (
    <>
      <Catalog category={null} />;
    </>
  );
};

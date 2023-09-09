import { useDispatch, useSelector } from 'react-redux';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import type { CategoriesList, RootState } from '../../utils/types';
import { fetchFilteredProducts } from '../../helpers/api/apiRoot';
import { normalizeData } from './utils/normalizeData';
import { updateProductsData } from './utils/updateData';
import { useEffect, useState } from 'react';
import { ProductCard } from '../../components/cards/productCard/ProductCard';
import { trimText } from './utils/trimText';
import { useLocation } from 'react-router-dom';
import { fetchCategories } from './utils/fetchCategories';

export const CatalogContent = () => {
  const { categoryId, categoryName, setCategoryId, setCategoryName } = useCategoryContext();
  const dispatch = useDispatch();

  const cardsData = useSelector((state: { productsData: RootState }) => state.productsData.cards);

  const [categoriesList, setCategoryList] = useState<CategoriesList[]>([]);
  useEffect(() => {
    const updateData = async (): Promise<void> => {
      await fetchCategories(setCategoryList);
    };
    updateData().catch((error) => {
      throw error;
    });
  }, []);

  const { pathname } = useLocation();
  const endpoint = pathname.substring(pathname.lastIndexOf('/') + 1);

  const eindpointData = categoriesList.filter((item) => {
    return item.name.toLowerCase() === endpoint;
  });

  const id = eindpointData.length > 0 ? eindpointData[0].id : '';
  const name = eindpointData.length > 0 ? eindpointData[0].name : '';

  useEffect(() => {
    setCategoryId(id);
    const categoryEndpoint = categoryName.length > 0 ? categoryName : name;
    setCategoryName(categoryEndpoint);

    if (name.length === 0) {
      setCategoryName(name);
    }

    const filter = categoryId.length > 0 ? `categories.id:"${categoryId}"` : undefined;
    const updateData = async (): Promise<void> => {
      await updateProductsData(dispatch, fetchFilteredProducts, normalizeData, filter);
    };

    updateData().catch((error) => {
      throw error;
    });
  }, [categoryId, dispatch, id, categoryName, name, setCategoryId, setCategoryName]);

  return (
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
  );
};

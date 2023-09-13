import { useDispatch, useSelector } from 'react-redux';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import type { RootState } from '../../utils/types';
import { fetchFilteredProducts, getCategories } from '../../helpers/api/apiRoot';
import { normalizeData } from './utils/normalizeData';
import { updateProductsData } from './utils/updateData';
import { useEffect } from 'react';
import { ProductCard } from '../../components/cards/productCard/ProductCard';
import { trimText } from './utils/trimText';
import { useLocation } from 'react-router-dom';

export const CatalogContent = () => {
  const { categoryId, setCategoryId, setCategoryName } = useCategoryContext();
  const dispatch = useDispatch();

  const cardsData = useSelector((state: { productsData: RootState }) => state.productsData.cards);

  const { pathname } = useLocation();
  const endpoint = pathname.substring(pathname.lastIndexOf('/') + 1);

  useEffect(() => {
    const updateData = async (): Promise<void> => {
      const categoriesData = await getCategories();
      const categoriesList = categoriesData.results.map((item) => {
        const [name] = Object.values(item.name);
        const { id } = item;

        return { name, id };
      });

      const eindpointData = categoriesList.filter((item) => {
        return item.name.toLowerCase() === endpoint;
      });

      const id = eindpointData.length > 0 ? eindpointData[0].id : '';
      if (id === null) {
        setCategoryId('');
        setCategoryName('');
      }
      const filter = id.length > 0 ? `categories.id:"${id}"` : undefined;

      await updateProductsData(dispatch, fetchFilteredProducts, normalizeData, filter);
    };

    updateData().catch((error) => {
      throw error;
    });
  }, [categoryId, dispatch, endpoint, setCategoryId, setCategoryName]);
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

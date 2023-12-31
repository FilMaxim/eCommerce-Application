import { useDispatch, useSelector } from 'react-redux';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import type { RootState } from '../../utils/types';
import { fetchFilteredProducts } from '../../helpers/api/apiRoot';
import { updateProductsData } from './utils/updateData';
import { type ChangeEvent, useEffect, useState, useMemo } from 'react';
import { ProductCard } from '../../components/cards/productCard/ProductCard';
import { trimText } from './utils/trimText';
import { useLocation } from 'react-router-dom';
import { Pagination, Stack } from '@mui/material';
import { SkeletonCard } from '../../components/ProgressBar/SkeletonCard';
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';

export const CatalogContent = () => {
  const { setCategoryName, currentFilter, setCategoryId, setCurrentFilter } = useCategoryContext();
  const dispatch = useDispatch();

  const { total, cardsData } = useSelector((state: { productsData: RootState }) => state.productsData);
  const categories = useSelector((state: { categoriesData: RootState }) => state.categoriesData.categories);
  const [page, setPage] = useState<number>(1);
  const [pagesCount, setPagesCount] = useState<number>(0);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { pathname } = useLocation();
  const endpoint = pathname.substring(pathname.lastIndexOf('/') + 1);

  const ednpointName = endpoint === 'catalog' ? '' : endpoint;

  const cardsPerPage = 8;
  const offset = useMemo(() => (page - 1) * cardsPerPage, [page, cardsPerPage]);

  const eindpointData = categories.filter((item) => {
    return item.name.toLowerCase() === ednpointName;
  });
  const id = eindpointData.length > 0 ? eindpointData[0].id : '';
  const categoryFilter = id.length > 0 ? `categories.id:"${id}"` : '';

  useEffect(() => {
    setCategoryName(ednpointName);
    setCategoryId(id);
    setCurrentFilter([]);
  }, [ednpointName, setCategoryName, setCategoryId, id, setCurrentFilter]);

  const [isUpdated, setUpdated] = useState<boolean>(false);
  const [isLoaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const updateData = async () => {
      const filter = [categoryFilter];
      const productsData = await fetchFilteredProducts({ filter, limit: 8 });
      updateProductsData(dispatch, productsData);
      setUpdated(true);
    };

    if (categories.length > 0) {
      updateData().catch((error) => {
        console.error(error);
      });
    }
  }, [dispatch, categories, categoryFilter]);

  useEffect(() => {
    const updateData = async () => {
      const filter = [categoryFilter, ...currentFilter];
      const updatedProductsData = await fetchFilteredProducts({ filter, offset, limit: 8 });
      updateProductsData(dispatch, updatedProductsData);
      setUpdated(true);
      setLoaded(true);
    };
    if (categories.length > 0) {
      setLoaded(false);
      updateData().catch((error) => {
        console.error(error);
      });
    }
  }, [offset, dispatch, categories.length]);

  useEffect(() => {
    const pagesCount = Math.ceil((total ?? 0) / cardsPerPage);
    setPagesCount(pagesCount);
  }, [total]);

  useEffect(() => {
    setPage(1);
  }, [categoryFilter]);

  if (!isUpdated) {
    return <ProgressBar />;
  }
  return (
    isUpdated && (
      <div className="flex flex-col items-center gap-4 sm:col-start-2 sm:row-start-3">
        <div className="grid max-w-[90%] grid-cols-catalog-cards justify-center gap-4">
          {cardsData.map((item) => {
            const { url, name, description, priceTag, id, attributes } = item;
            const rating = attributes?.find((obj) => obj.name === 'rating');
            const { price, discount } = priceTag;
            const formattedDescription = trimText(description);
            // prettier-ignore
            return isLoaded
              ? (<ProductCard
                imageUrl={url}
                title={name}
                titleName={name}
                description={formattedDescription}
                key={`card-${id}`}
                id={id}
                price={price}
                discount={discount}
                rating={rating?.value}
              />)
              : <SkeletonCard key={`skeleton-${id}`} />;
          })}
        </div>
        <Stack
          spacing={2}
          alignItems="center"
          className="pb-4"
          key={pagesCount}
        >
          <Pagination
            count={pagesCount}
            color="secondary"
            onChange={handleChange}
          />
        </Stack>
      </div>
    )
  );
};

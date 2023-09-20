import type { Dispatch } from '@reduxjs/toolkit';
import { setExtremums, setProducts } from '../../../slices/productCardsSlice';
import type { NormolizeDataType, FetchDataType, QueryArgs } from '../../../utils/types';
import type { ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';

export const updateProductsData = (
  dispatch: Dispatch,
  productsData: ProductProjectionPagedQueryResponse
): void => {
  const setProductsData = setProducts(productsData);
  dispatch(setProductsData);
};

export const updateExtremumsData = async (
  dispatch: Dispatch,
  fetchData: FetchDataType,
  normalizeData: NormolizeDataType,
  queryArgs: QueryArgs
): Promise<void> => {
  const productsData = await fetchData(queryArgs);

  const normalisedData = normalizeData(productsData);
  const setExtremumsData = setExtremums(normalisedData);
  dispatch(setExtremumsData);
};

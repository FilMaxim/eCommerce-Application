import type { Dispatch } from '@reduxjs/toolkit';
import { setExtremums, setProducts } from '../../../slices/productCardsSlice';
import type { NormolizeDataType, FetchDataType } from '../../../utils/types';

export const updateProductsData = async (
  dispatch: Dispatch,
  fetchData: FetchDataType,
  normalizeData: NormolizeDataType,
  quertString?: string | string[],
  sort?: string,
  text?: string
): Promise<void> => {
  const productsData = await fetchData(quertString, sort, text);
  const normalisedData = normalizeData(productsData);

  const setProductsData = setProducts(normalisedData);
  dispatch(setProductsData);
};

export const updateExtremumsData = async (
  dispatch: Dispatch,
  fetchData: FetchDataType,
  normalizeData: NormolizeDataType,
  quertString?: string | string[],
  sort?: string,
  text?: string
): Promise<void> => {
  const productsData = await fetchData(quertString, sort, text);

  const normalisedData = normalizeData(productsData);
  const setExtremumsData = setExtremums(normalisedData);
  dispatch(setExtremumsData);
};

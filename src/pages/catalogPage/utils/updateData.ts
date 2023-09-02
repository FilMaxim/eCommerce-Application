/* eslint-disable */
import type { Dispatch } from '@reduxjs/toolkit';
import { setExtremums, setProducts } from '../../../slices/ProductCardsSlice';
import type { FetcDataType, NormolizeDataType } from '../../../utils/types';

export const updateProductsData = async (
  dispatch: Dispatch,
  fetchData: FetcDataType,
  normalizeData: NormolizeDataType,
  quertString?: string | string[]
): Promise<void> => {
  const productsData = await fetchData(quertString);
  const normalisedData = normalizeData(productsData);

  const setProductsData = setProducts(normalisedData);
  dispatch(setProductsData);
};

export const updateExtremumsData = async (
  dispatch: Dispatch,
  fetchData: FetcDataType,
  normalizeData: NormolizeDataType,
  quertString?: string | string[]
): Promise<void> => {
  const productsData = await fetchData(quertString);
  const normalisedData = normalizeData(productsData);

  const setExtremumsData = setExtremums(normalisedData);
  dispatch(setExtremumsData);
};

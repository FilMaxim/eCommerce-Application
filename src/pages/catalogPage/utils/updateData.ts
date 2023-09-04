import type { Dispatch } from '@reduxjs/toolkit';
import { setExtremums, setProducts } from '../../../slices/ProductCardsSlice';
import type { NormolizeDataType, FetcDataType, ProductsDataInterface } from '../../../utils/types';
import { getExtremums } from './getExtremums';
import { normalizeData } from './normalizeData';

export const updateProductsData = async (
  dispatch: Dispatch,
  fetchData: FetcDataType,
  setCards: ((data: ProductsDataInterface[]) => void) | null,
  quertString?: string | string[]
): Promise<void> => {
  const productsData = await fetchData(quertString);
  const normalisedData = normalizeData(productsData);

  const setProductsData = setProducts(normalisedData);
  dispatch(setProductsData);
  if (setCards !== null) setCards(normalisedData);

  const extremums = getExtremums(productsData);
  const setExtremumsData = setExtremums(extremums);
  dispatch(setExtremumsData);
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

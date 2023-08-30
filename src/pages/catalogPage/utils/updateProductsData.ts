import type { Dispatch } from '@reduxjs/toolkit';
import { setExtremums, setProductsData } from '../../../slices/ProductCardsSlice';
import { getProductParams } from './getProductParams';
import type { ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';
import { fetchProducts } from '../../../helpers/api/apiRoot';

const normalizeData = (productsData: ProductProjectionPagedQueryResponse) => {
  return productsData.results.flatMap((product) => {
    const isVariants = product.variants.length > 0;

    const productParams = isVariants
      ? product.variants.map((variant) => getProductParams(product, variant))
      : [];

    const masterVariantParams = getProductParams(product, product.masterVariant);

    return [...productParams, masterVariantParams];
  });
};

type FetcDataType = (quertString?: string) => Promise<ProductProjectionPagedQueryResponse>;

export const updateProductsData = async (
  dispatch: Dispatch,
  fetchData: FetcDataType,
  quertString?: string
): Promise<void> => {
  const productsData = await fetchData(quertString);
  const normalisedData = normalizeData(productsData);
  console.log(normalisedData);

  dispatch(setProductsData(normalisedData));
};

export const updateExtremums = async (dispatch: Dispatch): Promise<void> => {
  const productsData = await fetchProducts();
  const values = productsData.results.flatMap((product) => {
    const isVariants = product.variants.length > 0;
    // prettier-ignore
    const variatsPriceTags = isVariants
      ? product.variants.map((variant) => {
        const { priceTag } = getProductParams(product, variant);
        return priceTag;
      })
      : [];

    const { priceTag } = getProductParams(product, product.masterVariant);

    const prices = [...variatsPriceTags, priceTag].map(({ price, discount }) => {
      return discount > 0 ? discount : price;
    });
    return prices;
  });

  const minValue = Math.floor(Math.min(...values));
  const maxValue = Math.ceil(Math.max(...values));

  dispatch(setExtremums([minValue, maxValue]));
};

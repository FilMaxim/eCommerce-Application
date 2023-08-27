import type { Dispatch } from '@reduxjs/toolkit';
import { getProducts } from '../../helpers/api/apiRoot';
import { setProductCard } from '../../slices/ProductCardsSlice';
import { getProductParams } from './getProductParams';

export const fetchProducts = async (dispatch: Dispatch): Promise<void> => {
  const productsData = await getProducts();
  const normalisedData = productsData.results.flatMap((product) => {
    const isVariants = product.variants.length > 0;

    const productParams = isVariants
      ? product.variants.map((variant) => getProductParams(product, variant))
      : [];

    const masterVariantParams = getProductParams(product, product.masterVariant);

    return [...productParams, masterVariantParams];
  });

  dispatch(setProductCard(normalisedData));
};

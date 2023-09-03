import type { ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';
import { getProductParams } from './getProductParams';
import type { ProductsDataInterface } from '../../../utils/types';

export const normalizeData = (productsData: ProductProjectionPagedQueryResponse): ProductsDataInterface[] => {
  return productsData.results.flatMap((product) => {
    const isVariants = product.variants.length > 0;

    const productParams = isVariants
      ? product.variants.map((variant) => getProductParams(product, variant))
      : [];
    const masterVariantParams = getProductParams(product, product.masterVariant);

    return [...productParams, masterVariantParams];
  });
};

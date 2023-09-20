import type { ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';
import { getProductParams } from './getProductParams';

export const getExtremums = (productsData: ProductProjectionPagedQueryResponse): number[] => {
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

  return [minValue, maxValue];
};

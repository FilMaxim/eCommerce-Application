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

  const [min, max] = values;

  const minValue = isFinite(min) ? Math.floor(Math.min(...values)) : 0;
  const maxValue = isFinite(max) ? Math.ceil(Math.max(...values)) : 0;

  return [minValue, maxValue];
};

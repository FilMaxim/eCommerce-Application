import type { ProductDraft, ProductVariant } from '@commercetools/platform-sdk';
import type { ProductsDataInterface } from '../../../utils/types';

const getNormalizedNumber = (number: number, devider: number): number => {
  const normalizedNumber = number / devider;
  return normalizedNumber;
};

export const getProductParams = (product: ProductDraft, variant: ProductVariant): ProductsDataInterface => {
  const imagesData = variant.images ?? [];
  const [imageData] = imagesData.filter((item) => item.label === 'card-logo') ?? [];

  const { url } = imageData ?? { url: '' };

  const [productName] = Object.values(product.name);
  const { sku } = variant;
  const name = `${productName} ${sku ?? ''}`;

  const rawDescription = product.description ?? '';
  const [description] = Object.values(rawDescription);

  const [prices] = variant.prices ?? [];
  const centsPerEur = 100;

  const rawPrice = prices?.value.centAmount ?? 0;
  const rawDiscount = prices?.discounted?.value.centAmount ?? 0;

  const normalizedPrice = getNormalizedNumber(rawPrice, centsPerEur);
  const normalizedDiscount = getNormalizedNumber(rawDiscount, centsPerEur);

  const priceTag = { price: normalizedPrice, discount: normalizedDiscount };

  return { url, name, description, priceTag };
};

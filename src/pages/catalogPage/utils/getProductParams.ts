import type { ProductProjection, ProductVariant } from '@commercetools/platform-sdk';
import type { ProductsDataInterface } from '../../../utils/types';

export const getProductParams = (
  product: ProductProjection,
  variant: ProductVariant
): ProductsDataInterface => {
  const imagesData = variant.images ?? [];
  const [imageData] = imagesData.filter((item) => item.label === 'card-logo') ?? [];

  const { url } = imageData ?? { url: '' };

  const [productName] = Object.values(product.name);
  const { sku } = variant;
  const name = `${productName} ${sku ?? ''}`;

  const rawDescription = product.description ?? '';
  const [description] = Object.values(rawDescription);
  const id = product.id;

  return { url, name, description, id };
};

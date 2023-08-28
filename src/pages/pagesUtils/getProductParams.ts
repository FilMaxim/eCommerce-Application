import type { ProductDraft, ProductVariant } from '@commercetools/platform-sdk';
import type { ProductsDataInterface } from '../../utils/types';

export const getProductParams = (product: ProductDraft, variant: ProductVariant): ProductsDataInterface => {
  const imagesData = variant.images ?? [];
  const [imageData] = imagesData.filter((item) => item.label === 'card-logo') ?? [];

  const { url } = imageData ?? { url: '' };

  const [productName] = Object.values(product.name);
  const { sku } = variant;
  const name = `${productName} ${sku ?? ''}`;

  const rawDescription = product.description ?? '';
  const [description] = Object.values(rawDescription);

  return { url, name, description };
};

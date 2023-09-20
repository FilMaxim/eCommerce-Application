import type { AttributesList, ProductsDataInterface } from '../../../utils/types';
import _ from 'lodash';

export const getAttributesList = (productsData: ProductsDataInterface[]): AttributesList[] => {
  const attributesCollection = _.flatMap(productsData, 'attributes');

  const uniqueKeys = _.chain(attributesCollection).map('name').uniq().sort().value();

  const attributesList = _.map(uniqueKeys, (key) => {
    const values = _.chain(attributesCollection).filter({ name: key }).flatMap('value').uniq().sort().value();
    // prettier-ignore
    const formattedValues =
      key === 'rating'
        ? _.chain(values)
          .map(Math.ceil)
          .uniq()
          .sort((a, b) => Number(b) - Number(a))
          .value()
        : values;

    return { name: key, attributes: formattedValues };
  });

  return attributesList;
};

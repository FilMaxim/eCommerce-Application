import _ from 'lodash';
import type { SelectedAttribute } from '../../../utils/types';

export const buildQueryString = (selectedAttributes: SelectedAttribute[]): string[] => {
  const obj = _.groupBy(selectedAttributes, 'name');
  const names = _.keys(obj);
  const attrNames = names.map((item) => {
    const values = obj[item].flatMap(({ name, value }) => {
      console.log(value);
      return name === 'rating' ? `(${Number(value) - 1} to *)` : `"${value}"`;
    });
    const prefix = item === 'rating' ? 'range' : '';
    const result = item.length > 0 ? `variants.attributes.${item}:${prefix}${values.join(',')}` : '';

    return result;
  });

  return _.compact(attrNames);
};

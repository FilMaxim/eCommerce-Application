import _ from 'lodash';
import type { SelectedAttribute } from '../../../utils/types';

export const buildQueryString = (selectedAttributes: SelectedAttribute[]): string[] => {
  const obj = _.groupBy(selectedAttributes, 'name');
  const names = _.keys(obj);
  const attrNames = names.map((item) => {
    const values = obj[item].flatMap(({ value }) => `"${value}"`);
    const result = item.length > 0 ? `variants.attributes.${item}:${values.join(',')}` : '';
    return result;
  });

  return _.compact(attrNames);
};

import type { Attribute } from '@commercetools/platform-sdk';
import type { SelectedAttribute } from '../../../utils/types';

export const handleCheckboxChange = (
  attribute: Attribute,
  selectedAttributes: SelectedAttribute[],
  setSelectedAttributes: (attr: SelectedAttribute[]) => void
) => {
  const isSelected = selectedAttributes.some(
    (attr) => attr.name === attribute.name && attr.value === attribute.value
  );

  const updatedAttributes = isSelected
    ? selectedAttributes.filter((attr) => !(attr.name === attribute.name && attr.value === attribute.value))
    : [...selectedAttributes, attribute];

  setSelectedAttributes(updatedAttributes);
};

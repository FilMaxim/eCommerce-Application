import '../../../i18n';
import { MenuItem, Select, type SelectChangeEvent, FormControl } from '@mui/material';
import { useState } from 'react';
import { updateProductsData } from './updateData';
import { useDispatch } from 'react-redux';
import { fetchFilteredProducts } from '../../../helpers/api/apiRoot';
import { normalizeData } from './normalizeData';
import { useTranslation } from 'react-i18next';
import { useCategoryContext } from '../../../hooks/useCategoryId';

export const SortBar = () => {
  const { currentFilter } = useCategoryContext();
  const dispatch = useDispatch();
  const [priceSort, setPriceSort] = useState<string>('');
  const [ratingSort, setRatingSort] = useState<string>('');

  const handleSort = async (
    { target }: SelectChangeEvent,
    filter: string[],
    param: string,
    setter: (value: string) => void
  ): Promise<void> => {
    const { value } = target;
    setter(value);

    const sort = `${param} ${value}`;
    await updateProductsData(dispatch, fetchFilteredProducts, normalizeData, filter, sort);
  };
  const { t } = useTranslation();
  return (
    <div className="m-2 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:items-center sm:justify-items-end">
      <span className="col-span-2 my-[-1rem] p-2 sm:col-span-1">Sort by:</span>
      <FormControl
        sx={{ minWidth: 100 }}
        size="small"
      >
        <Select
          displayEmpty
          id="asc-sort"
          value={priceSort}
          onChange={(e) => {
            const param = 'price';
            handleSort(e, currentFilter, param, setPriceSort).catch((error) => {
              throw error;
            });
          }}
          sx={{
            width: '100px'
          }}
        >
          <MenuItem
            disabled
            value=""
          >
            <em>{t('dropDown.sort.price')}</em>
          </MenuItem>
          <MenuItem value="asc">{t('dropDown.sort.asc')}</MenuItem>
          <MenuItem value="desc">{t('dropDown.sort.desc')} </MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{ minWidth: 100 }}
        size="small"
      >
        <Select
          displayEmpty
          id="desc-sort"
          value={ratingSort}
          onChange={(e) => {
            const param = 'variants.attributes.rating';
            handleSort(e, currentFilter, param, setRatingSort).catch((error) => {
              throw error;
            });
          }}
          sx={{
            width: '100px'
          }}
        >
          <MenuItem
            disabled
            value=""
          >
            <em>{t('dropDown.sort.rating')}</em>
          </MenuItem>
          <MenuItem value="asc">{t('dropDown.sort.asc')}</MenuItem>
          <MenuItem value="desc">{t('dropDown.sort.desc')} </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

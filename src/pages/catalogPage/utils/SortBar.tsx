import '../../../i18n';
import { MenuItem, Select, type SelectChangeEvent, Typography, FormControl } from '@mui/material';
import { useState } from 'react';
import { updateProductsData } from './updateData';
import { useDispatch } from 'react-redux';
import { fetchFilteredProducts } from '../../../helpers/api/apiRoot';
import { normalizeData } from './normalizeData';
import { useTranslation } from 'react-i18next';
import { useCategoryContext } from '../../../hooks/useCategoryContext';

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
    <div className="flex gap-2">
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {t('dropDown.sort.name')}
      </Typography>
      <FormControl
        className="max-w-[7rem]"
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
        className="max-w-[7rem]"
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

import '../../i18n';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useMemo, type ChangeEvent } from 'react';

import type { RootState, SelectedAttribute } from '../../utils/types';

import { useTranslation } from 'react-i18next';
import { useCategoryContext } from '../../hooks/useCategoryId';
import { updateProductsData } from '../../pages/catalogPage/utils/updateData';
import { normalizeData } from '../../pages/catalogPage/utils/normalizeData';
import { PrettoSlider } from './utils/PrettoSlider';
import { getAttributesList } from './utils/getAttributesList';
import { handleCheckboxChange } from './utils/handleCheckboxChange';
import { handleSliderChange } from './utils/handleSliderChange';
import { buildQueryString } from './utils/buildQueryString';
import { handleKeyDawn } from './utils/handleKeydown';
import { fetchFilteredProducts } from '../../helpers/api/apiRoot';

import { Formik, Field } from 'formik';
import { CheckboxWithLabel } from 'formik-material-ui';
import { Typography, Button, Stack, TextField } from '@mui/material';

export const FilterBar = () => {
  const dispatch = useDispatch();

  const extremums = useSelector((state: { productsData: RootState }) => state.productsData.extremums);
  const productsData = useSelector((state: { productsData: RootState }) => state.productsData);

  const [selectedAttributes, setSelectedAttributes] = useState<SelectedAttribute[]>([
    { name: '', value: '' }
  ]);
  const [prouctsCount, setCount] = useState(productsData.cards.length);
  const [sliderValue, setSliderValue] = useState<number[]>([0, 0]);

  const { categoryId, setCurrentFilter } = useCategoryContext();

  const [startValue, endValue] = extremums;

  useEffect(() => {
    setSliderValue([startValue, endValue]);
  }, [startValue, endValue]);

  const [minValue, maxValue] = sliderValue;

  const priceFilter = `variants.price.centAmount:range(${minValue * 100} to ${maxValue * 100})`;
  const attributesFilter = buildQueryString(selectedAttributes);
  const catecoryFilter = categoryId.length > 0 ? `categories.id:"${categoryId}"` : '';
  const filter = useMemo(
    () => [catecoryFilter, priceFilter, ...attributesFilter],
    [priceFilter, attributesFilter, catecoryFilter]
  );

  useEffect(() => {
    const handleRelease = async () => {
      const data = (await fetchFilteredProducts(filter)).results;
      setCount(data.length);
    };

    handleRelease().catch((error) => {
      throw error;
    });
  }, [filter]);

  const { t } = useTranslation();
  const attributesList = getAttributesList(productsData);

  const [currentMinValue, currentMaxValue] = sliderValue;
  return (
    <Formik
      initialValues={{
        minValue: 1,
        numbers: []
      }}
      onSubmit={async (_values, { setSubmitting }): Promise<void> => {
        setSubmitting(false);
        setCurrentFilter(filter);
        await updateProductsData(dispatch, fetchFilteredProducts, normalizeData, filter);
      }}
    >
      {({ submitForm, handleChange, resetForm }) => (
        <Stack
          component="form"
          spacing={1}
          noValidate
          autoComplete="off"
          className="w-[15rem] p-4"
        >
          <div className="grid grid-cols-filters gap-3">
            <Typography
              variant="h6"
              id="discrete-slider-small-steps"
              className="col-span-2 text-3xl font-bold"
            >
              Filter
              <hr className="my-2" />
            </Typography>
            <TextField
              id="standard-number"
              label="From"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              placeholder={`${currentMinValue}`}
              variant="standard"
              onKeyDown={handleKeyDawn}
              onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                const { value } = e.target;
                setSliderValue([Number(value), endValue]);
              }}
            />
            <TextField
              id="standard-number"
              label="To"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              placeholder={`${currentMaxValue}`}
              variant="standard"
              onKeyDown={handleKeyDawn}
              onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                const { value } = e.target;
                setSliderValue([startValue, Number(value)]);
              }}
            />
            <Field
              component={PrettoSlider}
              name="slider"
              value={sliderValue}
              onChange={(event: Event, newValue: number | number[], activeThumb: number): void => {
                handleSliderChange(event, newValue, activeThumb, sliderValue, setSliderValue);
              }}
              valueLabelDisplay="auto"
              aria-labelledby="discrete-slider-restrict"
              min={startValue}
              max={endValue}
              disableSwap
            />
            <Button
              color="error"
              sx={{
                gridColumn: '1 / span 2'
              }}
              onClick={() => {
                resetForm();
                setSelectedAttributes([]);
                setSliderValue([startValue, endValue]);
                submitForm().catch((error) => {
                  throw error;
                });
              }}
            >
              {t('button.reset')}
            </Button>
          </div>
          {attributesList.map(({ name, attributes }, i) => (
            <div
              className="border-b pb-4"
              key={`attributes-${i}`}
            >
              <Typography
                sx={{
                  color: 'text.secondary'
                }}
              >
                {t(`attributes.${name}.title`)}
              </Typography>
              <div className="grid grid-cols-filters">
                {attributes.map((attr, index) => {
                  return (
                    <Field
                      type="checkbox"
                      component={CheckboxWithLabel}
                      name="numbers"
                      color="secondary"
                      key={`${String(attr)}-${index}`}
                      value={String(attr)}
                      Label={{ label: t(`attributes.${name}.${String(attr)}`) }}
                      onChange={(e: ChangeEvent) => {
                        handleChange(e);
                        handleCheckboxChange(
                          { name: `${name}`, value: `${String(attr)}` },
                          selectedAttributes,
                          setSelectedAttributes
                        );
                      }}
                    />
                  );
                })}
              </div>
            </div>
          ))}
          <Button
            className="hover:opacity-80"
            variant="contained"
            onClick={() => {
              submitForm().catch((error) => {
                throw error;
              });
            }}
          >
            {`show (${prouctsCount})`}
          </Button>
        </Stack>
      )}
    </Formik>
  );
};

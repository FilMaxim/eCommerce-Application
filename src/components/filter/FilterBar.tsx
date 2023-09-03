import '../../i18n';
import styles from './FilterBar.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useMemo, type ChangeEvent } from 'react';

import type { RootState, SelectedAttribute } from '../../utils/types';

import { useTranslation } from 'react-i18next';
import { useCategoryId } from '../../hooks/useCategoryId';
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

  const { categoryId } = useCategoryId();

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

  return (
    <Formik
      initialValues={{
        minValue: 1,
        numbers: []
      }}
      onSubmit={async (_values, { setSubmitting }): Promise<void> => {
        setSubmitting(false);
        console.log('lfl');
        await updateProductsData(dispatch, fetchFilteredProducts, normalizeData, filter);
      }}
    >
      {({ submitForm, handleChange }) => (
        <Stack
          component="form"
          spacing={2}
          noValidate
          autoComplete="off"
          style={{
            gap: '2rem',
            padding: '20px',
            borderLeft: '1px solid rgba(0, 0, 0, 0.1)'
          }}
        >
          <Typography
            id="discrete-slider-small-steps"
            variant="h2"
            gutterBottom
          >
            Set a price
          </Typography>
          <div className={styles.slider}>
            <TextField
              sx={{
                gridColumn: '1/2',
                gridRow: '1/1'
              }}
              id="standard-number"
              label="From"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              placeholder={`${startValue}`}
              variant="standard"
              onKeyDown={handleKeyDawn}
              onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                const { value } = e.target;
                setSliderValue([Number(value), endValue]);
              }}
            />
            <TextField
              sx={{
                gridColumn: '2/2',
                gridRow: '1/1'
              }}
              id="standard-number"
              label="To"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              placeholder={`${endValue}`}
              variant="standard"
              onKeyDown={handleKeyDawn}
              onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                const { value } = e.target;
                setSliderValue([startValue, Number(value)]);
              }}
            />
            <Field
              component={PrettoSlider}
              name="testSlider"
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
          </div>
          {attributesList.map(({ name, attributes }, i) => (
            <div
              className={styles.group}
              key={`attributes-${i}`}
            >
              <Typography
                sx={{
                  color: 'text.secondary'
                }}
              >
                {t(`attributes.${name}.title`)}
              </Typography>
              <div className={styles.checkboxes}>
                {attributes.map((attr, index) => {
                  return (
                    <Field
                      type="checkbox"
                      component={CheckboxWithLabel}
                      name="numbers"
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

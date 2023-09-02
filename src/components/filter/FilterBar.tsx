/* eslint-disable */
import '../../i18n';

import styles from './FilterBar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, SelectedAttribute } from '../../utils/types';
import { Typography, Button, Stack } from '@mui/material';
import { useEffect, useState, useMemo, type ChangeEvent } from 'react';
import { Formik, Field } from 'formik';
import { fetchFilteredProducts } from '../../helpers/api/apiRoot';

import { CheckboxWithLabel } from 'formik-material-ui';

import { FormLabel, FormControl, FormGroup } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { useCategoryId } from '../../hooks/useCategoryId';
import { updateProductsData } from '../../pages/catalogPage/utils/updateData';
import { normalizeData } from '../../pages/catalogPage/utils/normalizeData';
import { PrettoSlider } from './utils/PrettoSlider';

import { getAttributesList } from './utils/getAttributesList';
import { handleCheckboxChange } from './utils/handleCheckboxChange';
import { handleSliderChange } from './utils/handleSliderChange';
import { buildQueryString } from './utils/buildQueryString';
import { CustomTextField } from './CustomTextfield';
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
    <div>
      <Formik
        initialValues={{
          minValue: 1,
          numbers: []
        }}
        onSubmit={async (_values, { setSubmitting }): Promise<void> => {
          setSubmitting(false);
          await updateProductsData(dispatch, fetchFilteredProducts, normalizeData, filter);
        }}
      >
        {({ submitForm, handleChange }) => (
          <FormControl
            component="fieldset"
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
            <Stack
              component="form"
              direction="row"
              spacing={2}
              noValidate
              autoComplete="off"
            >
              <CustomTextField
                value={`${minValue}`}
                currentValue={endValue}
                initValue="startValue"
                setSliderValue={setSliderValue}
              />
              <CustomTextField
                value={`${maxValue}`}
                currentValue={startValue}
                initValue="endValue"
                setSliderValue={setSliderValue}
              />
            </Stack>
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
            {attributesList.map(({ name, attributes }, i) => (
              <div
                className={styles.group}
                key={`attributes-${i}`}
              >
                <FormLabel component="legend">{t(`attributes.${name}.title`)}</FormLabel>
                <FormGroup>
                  {attributes.map((attr, index) => (
                    <Field
                      type="checkbox"
                      component={CheckboxWithLabel}
                      name="numbers"
                      key={`${attr.name}-${index}`}
                      value={`${attr.name}`}
                      Label={{ label: `${t(`attributes.${name}.${attr}`)}` }}
                      onChange={(e: ChangeEvent) => {
                        handleChange(e);
                        handleCheckboxChange(
                          { name: `${name}`, value: `${attr}` },
                          selectedAttributes,
                          setSelectedAttributes
                        );
                      }}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
            <Button
              variant="contained"
              onClick={submitForm}
            >
              {`show (${prouctsCount})`}
            </Button>
          </FormControl>
        )}
      </Formik>
    </div>
  );
};

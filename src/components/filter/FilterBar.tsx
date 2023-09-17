import '../../i18n';
import { useTranslation } from 'react-i18next';

import { CheckboxWithLabel } from 'formik-material-ui';
import { Typography, Button, Stack, TextField } from '@mui/material';

import type { AttributesList, RootState, SelectedAttribute } from '../../utils/types';

import { Formik, Field } from 'formik';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useMemo, type ChangeEvent } from 'react';

import { useCategoryContext } from '../../hooks/useCategoryContext';
import { updateProductsData } from '../../pages/catalogPage/utils/updateData';
import { normalizeData } from '../../pages/catalogPage/utils/normalizeData';
import { PrettoSlider } from './utils/PrettoSlider';
import { getAttributesList } from './utils/getAttributesList';
import { handleCheckboxChange } from './utils/handleCheckboxChange';
import { handleSliderChange } from './utils/handleSliderChange';
import { buildQueryString } from './utils/buildQueryString';
import { handleKeyDawn } from './utils/handleKeydown';
import { fetchFilteredProducts } from '../../helpers/api/apiRoot';
import { getExtremums } from '../../pages/catalogPage/utils/getExtremums';

export const FilterBar = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { categoryId, setCurrentFilter } = useCategoryContext();
  const { cardsData } = useSelector((state: { productsData: RootState }) => state.productsData);

  const [prouctsCount, setCount] = useState<number | undefined>(0);
  const [sliderValues, setSliderValues] = useState<number[]>([0, 0]);
  const [rawValues, setRawValues] = useState<number[]>([0, 0]);
  const [extremums, setExtremums] = useState<number[]>([0, 0]);
  const [attributesList, setAttributesLis] = useState<AttributesList[]>([]);
  const [isUpdatedValues, setUpdated] = useState<boolean>(false);
  const [inputStart, setInputStart] = useState<string>('');
  const [inputEnd, setInputEnd] = useState<string>('');
  const [selectedAttributes, setSelectedAttributes] = useState<SelectedAttribute[]>([
    { name: '', value: '' }
  ]);

  const [startValue, endValue] = extremums;
  const [minValue, maxValue] = sliderValues;
  const [currentMinValue, currentMaxValue] = rawValues;

  const filter = useMemo(() => {
    const priceFilter = `variants.price.centAmount:range(${minValue * 100} to ${maxValue * 100})`;
    const attributesFilter = buildQueryString(selectedAttributes);
    const catecoryFilter = categoryId.length > 0 ? `categories.id:"${categoryId}"` : '';
    return [catecoryFilter, priceFilter, ...attributesFilter];
  }, [minValue, maxValue, categoryId, selectedAttributes]);

  useEffect(() => {
    const updateExtremums = async () => {
      const catecoryFilter = categoryId.length > 0 ? `categories.id:"${categoryId}"` : undefined;
      const data = await fetchFilteredProducts({ filter: catecoryFilter });
      const extremums = getExtremums(data);
      const normalizedData = normalizeData(data);

      setAttributesLis(getAttributesList(normalizedData));
      setExtremums(extremums);

      if (!isUpdatedValues) {
        setCount(data.total);
        setRawValues([startValue, endValue]);
      }
    };

    updateExtremums().catch((error) => {
      throw error;
    });
  }, [categoryId, startValue, endValue, isUpdatedValues]);

  useEffect(() => {
    const updateTotal = async () => {
      const productsData = await fetchFilteredProducts({ filter });

      if (isUpdatedValues) {
        setCount(productsData.total);
      }
    };

    if (cardsData.length > 0) {
      updateTotal().catch((error) => {
        throw error;
      });
    }
  }, [isUpdatedValues, selectedAttributes, filter, cardsData.length]);

  useEffect(() => {
    setUpdated(false);
  }, [categoryId]);

  useEffect(() => {
    setSelectedAttributes([]);
  }, [categoryId]);

  useEffect(() => {
    setSliderValues([startValue, endValue]);
  }, [extremums, startValue, endValue]);

  return (
    <Formik
      initialValues={{
        attributes: []
      }}
      onSubmit={async (values, { setSubmitting }): Promise<void> => {
        setSubmitting(false);
        setCurrentFilter(filter);
        setSliderValues([startValue, endValue]);

        const data = await fetchFilteredProducts({ filter, limit: 8 });
        updateProductsData(dispatch, data);
        setCount(data.total);

        const extremumsData = await fetchFilteredProducts({ filter });
        const extremums = getExtremums(extremumsData);
        const [start, end] = extremums;
        setSliderValues([start, end]);
      }}
    >
      {({ submitForm, handleChange, resetForm, values }) => (
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
              value={inputStart}
              id="start-number"
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
                setSliderValues([Number(value), endValue]);
                setInputStart(value);
              }}
            />
            <TextField
              value={inputEnd}
              id="end-number"
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
                setSliderValues([startValue, Number(value)]);
                setInputEnd(value);
              }}
            />
            <Field
              component={PrettoSlider}
              name="slider"
              value={rawValues}
              onChange={(event: Event, newValue: number | number[], activeThumb: number): void => {
                handleSliderChange(event, newValue, activeThumb, rawValues, setRawValues);
              }}
              onChangeCommitted={() => {
                setUpdated(true);
                setSliderValues(rawValues);
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
                setInputStart('');
                setInputEnd('');
                resetForm();
                setSelectedAttributes([]);
                setSliderValues([startValue, endValue]);
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
              key={`attributes-${name}`}
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
                      checked={selectedAttributes.some((item) => {
                        return item.name === name && item.value === String(attr);
                      })}
                      component={CheckboxWithLabel}
                      name="attributes"
                      color="secondary"
                      key={`${String(attr)}-${index}`}
                      value={String(attr)}
                      Label={{ label: `${String(attr)}` }}
                      onChange={(e: ChangeEvent) => {
                        handleChange(e);
                        setUpdated(true);
                        setSliderValues([startValue, endValue]);
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
            {`show (${prouctsCount ?? 0})`}
          </Button>
        </Stack>
      )}
    </Formik>
  );
};

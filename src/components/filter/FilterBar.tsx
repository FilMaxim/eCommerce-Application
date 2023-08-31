/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../utils/types';
import { Box, Typography, Button, Slider, Stack, Input, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { fetchFilteredProducts } from '../../helpers/api/apiRoot';
import { ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';
import styled from '@emotion/styled';
import { updateProductsData } from '../../pages/catalogPage/utils/updateProductsData';

// const fetchData = async (filter: string): Promise<void> => {
//   const data = await getFilteredProducts(filter)
//   // console.log(data.results)
// }

const PrettoSlider = styled(Slider)({
  color: '#DB4444',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none'
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#000',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit'
    },
    '&:before': {
      display: 'none'
    }
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#DB4444',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)'
    },
    '& > *': {
      transform: 'rotate(45deg)'
    }
  }
});

export const FilterBar = () => {
  const valuetext = (value: number) => {
    return `${value}°C`;
  };

  const dispatch = useDispatch();
  const extremums = useSelector((state: { productsData: RootState }) => state.productsData.extremums);

  const proudctsData = useSelector((state: { productsData: RootState }) => state.productsData);
  const values = proudctsData.cards.map(({ priceTag }) => {
    const { discount, price } = priceTag;
    return discount > 0 ? discount : price;
  });

  const [startValue, endValue] = extremums;

  const [sliderValue, setSliderValue] = useState<number[]>([0, 0]);

  useEffect(() => {
    setSliderValue([startValue, endValue]);
  }, [startValue, endValue]);

  // console.log([startValue, endValue], sliderValue);
  const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    event.preventDefault();
    const [newValue1, newValue2] = Array.isArray(newValue) ? newValue : [newValue, newValue];

    setSliderValue([
      activeThumb === 0 ? Math.min(newValue1, sliderValue[1]) : sliderValue[0],
      activeThumb === 1 ? Math.max(newValue2, sliderValue[0]) : sliderValue[1]
    ]);
  };

  const handleRelease = async () => {
    const [from, to] = sliderValue;
    console.log(from, to);
    const filter = `variants.price.centAmount:range(${from * 100} to ${to * 100})`;
    await updateProductsData(dispatch, fetchFilteredProducts, filter);
    await fetchFilteredProducts(filter);
    // console.log(data, 'data');
  };

  return (
    <div>
      <Formik
        initialValues={{
          minValue: 1
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {({ submitForm, isSubmitting, touched, errors, values }) => (
          <Form>
            <Box sx={{ width: 300 }}>
              <Typography
                id="discrete-slider-small-steps"
                variant="h2"
                gutterBottom
              >
                set a price
              </Typography>
              <Stack
                component="form"
                direction="row"
                spacing={2}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-number"
                  label="From"
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="standard"
                />
                <TextField
                  color="error"
                  id="standard-number"
                  label="To"
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="standard"
                />
              </Stack>
              <Field
                component={PrettoSlider}
                name="testSlider"
                value={sliderValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                onChangeCommitted={handleRelease}
                min={startValue}
                max={endValue}
                disableSwap
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

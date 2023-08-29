import { useSelector } from 'react-redux';
import type { RootState } from '../../utils/types';
import { Box, Typography, Button } from '@mui/material';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

export const FilterBar = () => {
  const valuetext = (value: number) => {
    return `${value}°C`;
  };

  const proudctsData = useSelector((state: { productsData: RootState }) => state.productsData);
  const values = proudctsData.cards.map(({ priceTag }) => {
    const { discount, price } = priceTag;
    return discount > 0 ? discount : price;
  });
  const endValue = Math.max(...values);
  const startValue = Math.min(...values);

  const minDistance = 1;
  const [sliderValue, setSliderValue] = useState<number[]>([startValue, endValue]);

  const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    event.preventDefault();
    const [newValue1, newValue2] = Array.isArray(newValue) ? newValue : [newValue, newValue];

    setSliderValue([
      activeThumb === 0 ? Math.min(newValue1, sliderValue[1] - minDistance) : sliderValue[0],
      activeThumb === 1 ? Math.max(newValue2, sliderValue[0] + minDistance) : sliderValue[1]
    ]);
  };

  return (
    <div>
      <Formik
        initialValues={{
          minValue: 1
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log(sliderValue);
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
              <Field
                component={Slider}
                name="testSlider"
                value={sliderValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                min={startValue}
                step={minDistance}
                max={endValue}
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

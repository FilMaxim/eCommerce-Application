import { TextField } from '@mui/material';
import { type ChangeEvent } from 'react';

export const CustomTextField = ({
  value,
  currentValue,
  initValue,
  label,
  setSliderValue
}: {
  value: string;
  currentValue: number;
  initValue: string;
  label: string;
  setSliderValue: (arr: number[]) => void;
}) => {
  return (
    <TextField
      id="standard-number"
      label={label}
      type="number"
      InputLabelProps={{
        shrink: true
      }}
      placeholder={`${value}`}
      variant="standard"
      onKeyDown={(e) => {
        const exceptions = ['e', 'E', '+', '-'];
        exceptions.includes(e.key) && e.preventDefault();
      }}
      onChange={(e: ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        switch (initValue) {
          case 'startValue':
            setSliderValue([Number(value), currentValue]);
            break;
          case 'endValue':
            setSliderValue([currentValue, Number(value)]);
            break;
          default:
            break;
        }
      }}
    />
  );
};

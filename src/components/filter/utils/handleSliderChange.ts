export const handleSliderChange = (
  event: Event,
  newValue: number | number[],
  activeThumb: number,
  sliderValue: number[],
  setSliderValue: (values: number[]) => void
) => {
  event.preventDefault();
  const [leftValue, rightValue] = Array.isArray(newValue) ? newValue : [newValue, newValue];

  setSliderValue([
    activeThumb === 0 ? Math.min(leftValue, sliderValue[1]) : sliderValue[0],
    activeThumb === 1 ? Math.max(rightValue, sliderValue[0]) : sliderValue[1]
  ]);
};

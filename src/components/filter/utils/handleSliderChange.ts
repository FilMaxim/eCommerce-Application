export const handleSliderChange = (
  event: Event,
  newValue: number | number[],
  activeThumb: number,
  rawValues: number[],
  setRawValuew: (values: number[]) => void
) => {
  event.preventDefault();
  const [leftValue, rightValue] = Array.isArray(newValue) ? newValue : [newValue, newValue];

  setRawValuew([
    activeThumb === 0 ? Math.min(leftValue, rawValues[1]) : rawValues[0],
    activeThumb === 1 ? Math.max(rightValue, rawValues[0]) : rawValues[1]
  ]);
};

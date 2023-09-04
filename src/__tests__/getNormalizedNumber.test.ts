import { getNormalizedNumber } from '../pages/catalogPage/utils/getNormalizedNumber';

describe('getNormalizedNumber', () => {
  it('should return the normalized number', () => {
    const number = 10;
    const devider = 2;
    const result = getNormalizedNumber(number, devider);
    expect(result).toBe(5);
  });

  it('should return 0 if the number is 0', () => {
    const number = 0;
    const devider = 5;
    const result = getNormalizedNumber(number, devider);
    expect(result).toBe(0);
  });
});

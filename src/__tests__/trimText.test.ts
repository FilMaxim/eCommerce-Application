import { trimText } from '../pages/catalogPage/utils/trimText';

describe('trimText', () => {
  it('should trim text until the first period or newline character', () => {
    const text = 'This is a test. This is only a test.';
    const expected = 'This is a test.';
    const result = trimText(text);
    expect(result).toEqual(expected);
  });
  it('should return the original text if it does not contain a period or newline character', () => {
    const text = 'This is a test';
    const expected = 'This is a test';
    const result = trimText(text);
    expect(result).toEqual(expected);
  });

  it('should handle empty strings', () => {
    const text = '';
    const expected = '';
    const result = trimText(text);
    expect(result).toEqual(expected);
  });

  it('should handle strings with only a period or newline character', () => {
    const text = '.';
    const expected = '.';
    const result = trimText(text);
    expect(result).toEqual(expected);
  });

  it('should handle strings with multiple periods or newline characters', () => {
    const text = 'This is a test.\nThis is only a test.';
    const expected = 'This is a test.';
    const result = trimText(text);
    expect(result).toEqual(expected);
  });
});

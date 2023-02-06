import isValidNumber from './';

it('isValidNumber', () => {
  expect(isValidNumber(0)).toBe(true);
  expect(isValidNumber(1)).toBe(true);
  expect(isValidNumber(123.3)).toBe(true);
  expect(isValidNumber(Number.MAX_VALUE)).toBe(true);
  expect(isValidNumber(Number.MIN_VALUE)).toBe(true);
  expect(isValidNumber('123.3')).toBe(false);
  expect(isValidNumber(undefined)).toBe(false);
  expect(isValidNumber(null)).toBe(false);
  expect(isValidNumber(NaN)).toBe(false);
});

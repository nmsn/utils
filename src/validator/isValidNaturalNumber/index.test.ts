import isValidNaturalNumber from './';

it('isValidNaturalNumber', () => {
  expect(isValidNaturalNumber(0)).toBe(true);
  expect(isValidNaturalNumber(1)).toBe(true);
  expect(isValidNaturalNumber(-1)).toBe(false);
});

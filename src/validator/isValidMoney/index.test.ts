import isValidMoney from './';

it('isValidMoney', () => {
  expect(isValidMoney('')).toBe(false);
  expect(isValidMoney('1')).toBe(true);
});

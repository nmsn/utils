import isValidMoney from './';

it('isValidStr', () => {
  expect(isValidMoney('')).toBe(false);
  expect(isValidMoney('1')).toBe(true);
});

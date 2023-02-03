import isValidString from './';

it('isValidStr', () => {
  expect(isValidString('')).toBe(false);
  expect(isValidString('1')).toBe(true);
});

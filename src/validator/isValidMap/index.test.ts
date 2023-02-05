import isValidMap from './';

it('isValidMap', () => {
  expect(isValidMap(new Map())).toBe(false);
  expect(isValidMap(new Map([[1, 1]]))).toBe(true);
});

import isMap from './';

it('isMap', () => {
  expect(isMap(null)).toBe(false);
  expect(isMap(undefined)).toBe(false);
  expect(isMap([])).toBe(false);
  expect(isMap({})).toBe(false);
  expect(isMap(new Map())).toBe(true);
  expect(isMap(new Map([[1, 1]]))).toBe(true);
});

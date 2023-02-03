import isMap from './';

it('isMap', () => {
  expect(isMap(null)).toBeFalsy();
  expect(isMap(undefined)).toBeFalsy();
  expect(isMap([])).toBeFalsy();
  expect(isMap({})).toBeFalsy();
  expect(isMap(new Map())).toBeTruthy();
  expect(isMap(new Map([[1, 1]]))).toBeTruthy();
});

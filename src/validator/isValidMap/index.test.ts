import isValidMap from './';

it('isValidMap', () => {
  expect(isValidMap(new Map())).toBeFalsy();
  expect(isValidMap(new Map([[1, 1]]))).toBeTruthy();
});

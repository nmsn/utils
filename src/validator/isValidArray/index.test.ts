import isValidArray from './';

describe('isValidArray', () => {
  it('isValidArray', () => {
    expect(isValidArray([0])).toBe(true);
    expect(isValidArray([])).toBe(false);
  });
});

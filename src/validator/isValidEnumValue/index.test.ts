import isValidEnumValue from './';

describe('isValidEnum', () => {
  it('isValidArray', () => {
    expect(isValidEnumValue(1)).toBe(true);
    expect(isValidEnumValue('a', ['a', 'b'])).toBe(true);
  });
});

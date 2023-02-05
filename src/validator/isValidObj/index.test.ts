import isValidObj from './';

describe('isValidObj', () => {
  it('isValidObj', () => {
    expect(isValidObj({ a: 1 })).toBe(true);
    expect(isValidObj({})).toBe(false);
    expect(isValidObj(() => 1)).toBe(false);
  });
});

import isObj from './';

describe('isObj', () => {
  it('isObj', () => {
    expect(isObj({ a: 1 })).toBe(true);
    expect(isObj({})).toBe(true);
    expect(isObj(() => 1)).toBe(false);
    expect(isObj(null)).toBe(false);
  });
});

import isObj from './';

describe('isObj', () => {
  it('isObj', () => {
    expect(isObj({ a: 1 })).toBeTruthy();
    expect(isObj({})).toBeTruthy();
    expect(isObj(() => 1)).toBeFalsy();
    expect(isObj(null)).toBeFalsy();
  });
});

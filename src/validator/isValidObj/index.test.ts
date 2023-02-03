import isValidObj from './';

describe('isValidObj', () => {
  it('isValidObj', () => {
    expect(isValidObj({ a: 1 })).toBeTruthy();
    expect(isValidObj({})).toBeFalsy();
    expect(isValidObj(() => 1)).toBeFalsy();
  });
});

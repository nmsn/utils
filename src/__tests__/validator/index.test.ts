import { isValidParam, isValidEnum, isValidMoney, isValidArray } from '../../validator';

const isValidParamTestArr = [
  [0, true],
  [1, true],
  [-1, true],
  [Infinity, true],
  [-Infinity, true],
  [NaN, false],
  ['', false],
  [' ', false],
  ['123', true],
  ['a', true],
  [null, false],
] as [string | number, boolean][];

describe('isValidParam', () => {
  it.each(isValidParamTestArr)('"%s" is valid param', (val, bool) => {
    expect(isValidParam(val)).toBe(bool);
  });
});

const isValidEnumTestArr = [
  [0, true],
  [1, true],
  [-1, false],
  [Infinity, true],
  [-Infinity, false],
  [NaN, false],
  ['', false],
  [' ', false],
  ['123', true],
  ['a', true],
] as [string | number, boolean][];

describe('isValidEnum', () => {
  it.each(isValidEnumTestArr)('"%s" is valid enum', (val, bool) => {
    expect(isValidEnum(val)).toBe(bool);
  });
});

// ---

const isValidMoneyTestArr = [
  [0, true],
  [1, true],
  [-1, true],
  [Infinity, false],
  [-Infinity, false],
  [NaN, false],
  ['', false],
  [' ', false],
  ['123', true],
  ['a', false],
] as [string | number, boolean][];

describe('isValidMoney', () => {
  it.each(isValidMoneyTestArr)('"%s" is valid money', (val, bool) => {
    expect(isValidMoney(val)).toBe(bool);
  });
});

describe('isValidArray', () => {
  it('isValidArray', () => {
    expect(isValidArray([0])).toBeTruthy();
    expect(isValidArray([])).toBeFalsy();
  });
});

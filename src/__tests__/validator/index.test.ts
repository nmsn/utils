import {
  isValidParam,
  isValidEnum,
  isValidMoney,
  isValidArray,
  isObj,
  isValidObj,
  isValidNumber,
  isValidNaturalNumber,
  isMap,
  isValidMap,
  isValidStr,
} from '../../validator';

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

describe('isObj', () => {
  it('isObj', () => {
    expect(isObj({ a: 1 })).toBeTruthy();
    expect(isObj({})).toBeTruthy();
    expect(isObj(() => 1)).toBeFalsy();
  });
});

describe('isValidObj', () => {
  it('isValidObj', () => {
    expect(isValidObj({ a: 1 })).toBeTruthy();
    expect(isValidObj({})).toBeFalsy();
    expect(isValidObj(() => 1)).toBeFalsy();
  });
});

it('isValidNumber', () => {
  expect(isValidNumber(0)).toBeTruthy();
  expect(isValidNumber(1)).toBeTruthy();
  expect(isValidNumber(123.3)).toBeTruthy();
  expect(isValidNumber(Number.MAX_VALUE)).toBeTruthy();
  expect(isValidNumber(Number.MIN_VALUE)).toBeTruthy();
  expect(isValidNumber('123.3')).toBeFalsy();
  expect(isValidNumber(undefined)).toBeFalsy();
  expect(isValidNumber(null)).toBeFalsy();
});

it('isValidNaturalNumber', () => {
  expect(isValidNaturalNumber(0)).toBeTruthy();
  expect(isValidNaturalNumber(1)).toBeTruthy();
  expect(isValidNaturalNumber(-1)).toBeFalsy();
});

it('isMap', () => {
  expect(isMap(null)).toBeFalsy();
  expect(isMap(undefined)).toBeFalsy();
  expect(isMap([])).toBeFalsy();
  expect(isMap({})).toBeFalsy();
  expect(isMap(new Map())).toBeTruthy();
  expect(isMap(new Map([[1, 1]]))).toBeTruthy();
});

it('isValidMap', () => {
  expect(isValidMap(new Map())).toBeFalsy();
  expect(isValidMap(new Map([[1, 1]]))).toBeTruthy();
});

it('isValidStr', () => {
  expect(isMap(null)).toBeFalsy();
  expect(isMap(undefined)).toBeFalsy();
  expect(isValidStr('')).toBeFalsy();
  expect(isValidStr('1')).toBeTruthy();
});

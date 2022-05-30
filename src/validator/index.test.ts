// const { isValidEnum } = require('./validator').default;
import { isValidParam, isValidEnum, isValidMoney } from './index';

// TODO 继承
test('0 is valid param', () => {
  expect(isValidParam(0)).toBe(true);
});

test('1 is valid param', () => {
  expect(isValidParam(1)).toBe(true);
});

test('-1 is valid param', () => {
  expect(isValidParam(-1)).toBe(true);
});

test('Infinity is valid param', () => {
  expect(isValidParam(Infinity)).toBe(true);
});

test('-Infinity is valid param', () => {
  expect(isValidParam(-Infinity)).toBe(true);
});

test('NaN is valid param', () => {
  expect(isValidParam(NaN)).not.toBe(true);
});

test('"" is valid param', () => {
  expect(isValidParam('')).not.toBe(true);
});

test('" " is valid param', () => {
  expect(isValidParam(' ')).not.toBe(true);
});

test('"123" is valid param', () => {
  expect(isValidParam('123')).toBe(true);
});

test('"a" is valid param', () => {
  expect(isValidParam('a')).toBe(true);
});

// ---

test('0 is valid enum', () => {
  expect(isValidEnum(0)).toBe(true);
});

test('1 is valid enum', () => {
  expect(isValidEnum(1)).toBe(true);
});

test('-1 is valid enum', () => {
  expect(isValidEnum(-1)).not.toBe(true);
});

test('Infinity is valid enum', () => {
  expect(isValidEnum(Infinity)).toBe(true);
});

test('-Infinity is valid enum', () => {
  expect(isValidEnum(-Infinity)).not.toBe(true);
});

test('NaN is valid enum', () => {
  expect(isValidEnum(NaN)).not.toBe(true);
});

test('"" is valid enum', () => {
  expect(isValidEnum('')).not.toBe(true);
});

test('" " is valid enum', () => {
  expect(isValidEnum(' ')).not.toBe(true);
});

test('"123" is valid enum', () => {
  expect(isValidEnum('123')).toBe(true);
});

test('"a" is valid enum', () => {
  expect(isValidEnum('a')).toBe(true);
});

// ---

test('0 is valid money', () => {
  expect(isValidMoney(0)).toBe(true);
});

test('1 is valid money', () => {
  expect(isValidMoney(1)).toBe(true);
});

test('-1 is valid money', () => {
  expect(isValidMoney(-1)).toBe(true);
});

// 正则匹配的
test('Infinity is valid money', () => {
  expect(isValidMoney(Infinity)).not.toBe(true);
});

test('-Infinity is valid money', () => {
  expect(isValidMoney(-Infinity)).not.toBe(true);
});

test('NaN is valid money', () => {
  expect(isValidMoney(NaN)).not.toBe(true);
});

test('"" is valid money', () => {
  expect(isValidMoney('')).not.toBe(true);
});

test('" " is valid money', () => {
  expect(isValidMoney(' ')).not.toBe(true);
});

test('"123" is valid money', () => {
  expect(isValidMoney('123')).toBe(true);
});

test('"a" is valid money', () => {
  expect(isValidMoney('a')).not.toBe(true);
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  addThousandSeparator,
  formatSectionStr,
  arr2Obj,
  displayWithUnit,
  getSuffix,
  formatDecimals2Percent,
  deleteAttrs,
} from '../../format';

it('formatSectionStr', () => {
  expect(formatSectionStr('', '-')).toBe('');
  expect(formatSectionStr('123-123', '-')).toBe('123');
  expect(formatSectionStr('123-456', '-')).toBe('123-456');
});

it('addThousandSeparator', () => {
  expect(addThousandSeparator(NaN)).toBe('0');
  expect(addThousandSeparator('0')).toBe('0');
  expect(addThousandSeparator(0)).toBe('0');
  expect(addThousandSeparator(10000)).toBe('10,000');
  expect(addThousandSeparator(1234.5)).toBe('1,234.5');
});

it('arr2Obj', () => {
  expect(
    arr2Obj([
      ['1', 1],
      ['2', 2],
    ]),
  ).toEqual({ 1: 1, 2: 2 });

  expect(arr2Obj([])).toEqual({});
});

it('displayWithUnit', () => {
  expect(displayWithUnit('123', '元')).toBe('123元');
  expect(displayWithUnit('123元', '元')).toBe('123元');
  expect(displayWithUnit(123, '元')).toBe('123元');
  expect(displayWithUnit('', '')).toBe('--');
});

it('displayWithUnit', () => {
  expect(getSuffix('123.123')).toBe('123');
  expect(getSuffix('123')).toBe('');
  expect(getSuffix('')).toBe('');
});

it('formatDecimals2Percent', () => {
  expect(formatDecimals2Percent(0)).toBe('0%');
  expect(formatDecimals2Percent(1)).toBe('100%');
  expect(formatDecimals2Percent(0.2)).toBe('20%');
  expect(formatDecimals2Percent(0.111111)).toBe('11.11%');
});

it('deleteAttrs', () => {
  expect(deleteAttrs({ a: 1, b: 2 }, ['a'])).toEqual({ b: 2 });
  expect(deleteAttrs({ b: 2 }, ['a'])).toEqual({ b: 2 });
  expect(() => deleteAttrs([1, 2], ['0'])).toThrow('param is not a valid object');
});

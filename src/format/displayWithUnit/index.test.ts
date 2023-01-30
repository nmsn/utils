import displayWithUnit from './index';

it('displayWithUnit', () => {
  expect(displayWithUnit('123', '元')).toBe('123元');
  expect(displayWithUnit('123元', '元')).toBe('123元');
  expect(displayWithUnit(0, '元')).toBe('0元');
  expect(displayWithUnit(undefined, '元')).toBe('--');
  expect(displayWithUnit(undefined, '元', { isDisplayUnitInValid: true })).toBe('--元');
  expect(displayWithUnit(null, '元')).toBe('--');
  expect(displayWithUnit('', '')).toBe('--');
  expect(displayWithUnit(0, '元', { isZeroValid: false })).toBe('--');
  expect(displayWithUnit(null, '元', { emptyMark: '-/-' })).toBe('-/-');
});

import displayWithUnit from './index';

it('displayWithUnit', () => {
  expect(displayWithUnit('123', '元')).toBe('123元');
  expect(displayWithUnit('123元', '元')).toBe('123元');
  expect(displayWithUnit(123, '元')).toBe('123元');
  expect(displayWithUnit('', '')).toBe('--');
});

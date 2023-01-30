import formatDecimals2Percent from './index';

it('formatDecimals2Percent', () => {
  expect(formatDecimals2Percent(0)).toBe('0');
  expect(formatDecimals2Percent(1)).toBe('1');
  expect(formatDecimals2Percent(0, { isThresholdInt: false })).toBe('0%');
  expect(formatDecimals2Percent(1, { isThresholdInt: false })).toBe('100%');
  expect(formatDecimals2Percent(0.2)).toBe('20%');
  expect(formatDecimals2Percent(0.111111)).toBe('11.11%');
  expect(() => formatDecimals2Percent(100)).toThrowError();
  expect(() => formatDecimals2Percent(-1)).toThrowError();
});

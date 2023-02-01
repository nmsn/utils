import toValidDecimal from './index';

it('toValidDecimal', () => {
  expect(() => toValidDecimal(NaN)).toThrow();
  expect(toValidDecimal(0)).toBe(0);
  expect(toValidDecimal(10000.0)).toBe(10000);
  expect(toValidDecimal(1234.567)).toBe(1234.57);
  expect(toValidDecimal(1234.5678, 3)).toBe(1234.568);
  expect(toValidDecimal(1234.5678, 5)).toBe(1234.5678);
});

import addThousandSeparator from './index';

it('addThousandSeparator', () => {
  expect(addThousandSeparator(NaN)).toBe('0');
  expect(addThousandSeparator('0')).toBe('0');
  expect(addThousandSeparator(0)).toBe('0');
  expect(addThousandSeparator(10000)).toBe('10,000');
  expect(addThousandSeparator(-10000)).toBe('-10,000');
  expect(addThousandSeparator(1234.5)).toBe('1,234.5');
  expect(addThousandSeparator('1234.5')).toBe('1,234.5');
});

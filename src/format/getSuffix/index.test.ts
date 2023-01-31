import getSuffix from './index';

it('getSuffix', () => {
  expect(getSuffix('123.123')).toBe('123');
  expect(getSuffix('123')).toBe('');
  expect(getSuffix('')).toBe('');
});

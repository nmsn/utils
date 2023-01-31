import formatSectionStr from './index';

it('formatSectionStr', () => {
  expect(() => formatSectionStr('', '-')).toThrowError();
  expect(formatSectionStr('123-123', '-')).toBe('123');
  expect(formatSectionStr([123, 123], '-')).toBe('123');
  expect(formatSectionStr('123-456', '-')).toBe('123-456');
});

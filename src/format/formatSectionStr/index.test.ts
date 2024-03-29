import formatSectionStr from './';

it('formatSectionStr', () => {
  expect(() => formatSectionStr('', '-')).toThrow();
  expect(formatSectionStr('123-123', '-')).toBe('123');
  expect(formatSectionStr([123, 123], '-')).toBe('123');
  expect(formatSectionStr('123-456', '-')).toBe('123-456');
});

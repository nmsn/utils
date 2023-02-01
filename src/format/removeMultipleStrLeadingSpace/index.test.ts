import removeMultipleStrLeadingSpace from './index';

it('removeMultipleStrLeadingSpace', () => {
  const text = `
  1

  2

  3

  4`;

  const result = `
1

2

3

4`;

  const result2 = `1
2
3
4`;

  expect(removeMultipleStrLeadingSpace('')).toBe('');

  expect(removeMultipleStrLeadingSpace(text)).toBe(result);

  expect(removeMultipleStrLeadingSpace(text, false)).toBe(result2);
});

import toFraction from './';

it('toFraction', () => {
  expect(toFraction(1, 2)).toEqual([1, 2]);
  expect(toFraction(5, 10)).toEqual([1, 2]);
  expect(() => toFraction(-1, 2)).toThrow();
  expect(() => toFraction(0.1, 2)).toThrow();
  expect(toFraction(1, 2, true)).toBe(`1/2`);
  expect(toFraction(5, 10, true)).toBe(`1/2`);
  expect(() => toFraction(0, 10)).toThrow();
  expect(() => toFraction(5, 1)).toThrow();
});

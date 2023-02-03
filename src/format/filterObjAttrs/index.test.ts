import filterObjAttrs from './';

it('filterObjAttrs', () => {
  expect(filterObjAttrs({ a: 1, b: 2, c: 3 }, { filterAttrs: ['a'] })).toEqual({ a: 1 });
  expect(filterObjAttrs({ a: 1, b: 2, c: 3 }, { deleteAttrs: ['a'] })).toEqual({ b: 2, c: 3 });
  expect(
    filterObjAttrs({ a: 1, b: 2, c: 3 }, { filterAttrs: ['a', 'b'], deleteAttrs: ['a'] }),
  ).toEqual({ b: 2 });
  expect(
    filterObjAttrs({ a: 1, b: 2, c: 3 }, { formatAttrs: [['a', (a: number) => a + 1]] }),
  ).toEqual({
    a: 2,
    b: 2,
    c: 3,
  });
  expect(() => filterObjAttrs([], { filterAttrs: ['a'] })).toThrow();
});

import isSameCharacterStr from './';

it('isSameCharacterStr', () => {
  expect(isSameCharacterStr('***', '*')).toBe(true);
  expect(isSameCharacterStr('1111')).toBe(true);
  expect(isSameCharacterStr('123')).toBe(false);
  expect(() => isSameCharacterStr('')).toThrow();
});

import isAsyncFunction from './';

it('isAsyncFunction', () => {
  expect(isAsyncFunction(() => ({}))).toBe(false);
  expect(isAsyncFunction(async () => ({}))).toBe(true);
});

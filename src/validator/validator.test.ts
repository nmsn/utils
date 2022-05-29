// const { isValidEnum } = require('./validator').default;
import { isValidEnum } from './validator';

test('adds 1 + 2 to equal 3', () => {
  expect(isValidEnum(1)).toBe(false);
});

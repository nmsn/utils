/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '^lodash-es/(.*)$': '<rootDir>/node_modules/lodash/$1',
  },
  collectCoverage: true,
};

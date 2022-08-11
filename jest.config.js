module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  rootDir: './',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '^lodash-es$': 'lodash',
  },
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  // 自动清除 Mock
  clearMocks: true,

  // 开启覆盖率
  collectCoverage: true,

  // 指定生成覆盖率报告文件存放位置
  coverageDirectory: 'coverage',

  // 不用管
  coverageProvider: 'v8',
};

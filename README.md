# Utils

![npm](https://img.shields.io/npm/v/@nmsn/utils)
![GitHub last commit](https://img.shields.io/github/last-commit/nmsn/utils)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/nmsn/utils)
![NPM bundle size](https://img.shields.io/bundlephobia/minzip/@nmsn/utils)
[![codecov](https://codecov.io/gh/nmsn/utils/branch/main/graph/badge.svg?token=PCX7IEL478)](https://codecov.io/gh/nmsn/utils)
![license](https://img.shields.io/npm/l/@nmsn/utils)

English | [简体中文](./README.zh-CN.md)
## Background

Summarize common tool functions for daily development。
## Features

- `format` Data type conversion functions
- `hooks` Customized `react hooks`
- `regex`
- `types` Customized `ts`
- `validator` Check function

## Install

```shell
npm install @nmsn/utils
```

## Usage

```ts
import { addThousandSeparator } from '@nmsn/utils';

// '1,000'
console.log(addThousandSeparator(1000));
```

## Finished

- [x] rollup
- [x] jest
- [x] typescript
- [x] dumi doc

## TODO

- [ ] More Test Case.
- [ ] More utils.
- [ ] hooks
  - [ ] cache url params
  - [ ] dom outer click listener
## Maintainers

[@nmsn](https://github.com/nmsn/utils)

## Contributing

[submit a new issue](https://github.com/meolu/walle-web/issues/new)

## License
MIT © nmsn

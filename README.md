# Utils

![NPM](https://img.shields.io/npm/l/@nmsn/utils)
![npm](https://img.shields.io/npm/v/@nmsn/utils)
![GitHub last commit](https://img.shields.io/github/last-commit/nmsn/utils)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/nmsn/utils)
![NPM bundle size](https://img.shields.io/bundlephobia/min/@nmsn/utils)

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

## Maintainers

[@nmsn](https://github.com/nmsn/utils)

## Contributing

[submit a new issue](https://github.com/meolu/walle-web/issues/new)

## License
MIT © nmsn

# 开发工具函数集合

![NPM](https://img.shields.io/npm/l/@nmsn/utils)
![npm](https://img.shields.io/npm/v/@nmsn/utils)
![GitHub last commit](https://img.shields.io/github/last-commit/nmsn/utils)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/nmsn/utils)

## Background

汇总日常开发常用工具函数
## Feature

- format 数据转换
- hooks 自定义 react hooks
- regex 正则
- types 自定义 ts 类型
- validator 校验函数

## Install

```shell
npm install @nmsn/utils
```

## Usage

```ts
import { format } from '@nmsn/utils';

// '1,000'
console.log(format.addThousandSeparator(1000));
```

## TODO

- [ ] 功能开发
  - [ ] format
    - [ ] formatSubmit
    - [ ] getTwoWayDataFromMapOrObj
    - [ ] formatFile
  - [ ] hooks
    - [ ] useReq
    - [ ] useScrollData
  - [ ] regex
  - [ ] types
  - [ ] validator
- [ ] rollup 打包

## Maintainers

[@nmsn](https://github.com/nmsn/utils)

## Contributing

[submit a new issue](https://github.com/meolu/walle-web/issues/new)

## License
MIT © nmsn

# 开发工具函数集合

![npm](https://img.shields.io/npm/v/@nmsn/utils)
![GitHub last commit](https://img.shields.io/github/last-commit/nmsn/utils)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/nmsn/utils)
![NPM bundle size](https://img.shields.io/bundlephobia/minzip/@nmsn/utils)
[![codecov](https://codecov.io/gh/nmsn/utils/branch/main/graph/badge.svg?token=PCX7IEL478)](https://codecov.io/gh/nmsn/utils)
![license](https://img.shields.io/npm/l/@nmsn/utils)

[English](./README.md) | 简体中文

## 背景

汇总日常开发常用工具函数

## 功能

- `format` 数据转换
- `hooks` 自定义 `react hooks`
- `regex` 正则
- `types` 自定义 `ts` 类型
- `validator` 校验函数

## 安装

```shell
npm install @nmsn/utils
```

## 使用

```ts
import { addThousandSeparator } from '@nmsn/utils';

// '1,000'
console.log(addThousandSeparator(1000));
```

## 已完成

- [x] rollup 打包
- [x] jest
- [x] typescript
- [x] dumi 文档

## 待开发

- [ ] 完善测试用例
- [ ] 更多工具函数

## 维护人员

[@nmsn](https://github.com/nmsn/utils)

## 贡献

[提交 issue](https://github.com/meolu/walle-web/issues/new)

## 协议
MIT © nmsn


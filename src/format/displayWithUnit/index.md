---
title: displayWithUnit
toc: false
---


## displayWithUnit

优化展示携带单位的字段的函数

### 特点

- 自动处理重复的单位
- 提供展示配置项
  - 无效数据展示符号
  - `0` 是否为有效数据
  - 无效数据展示是否携带单位

<code src="./demo.tsx"></code>

### API

```typescript
export type Options = { emptyMark: string, isZeroValid?: boolean, isDisplayUnitInValid?: boolean };

const data = displayWithUnit(num: string | number, unit: string, option: Options);
```

### Params

| 参数   | 说明                   | 类型               | 默认值 |
| ------ | ---------------------- | ------------------ | ------ |
| num    | 入参，待处理的字段     | `number \| string` | -      |
| unit   | 单位                   | `string`           | -      |
| option | 数据不存在时展示的内容 | `Options`          | -      |

### Options

| 参数                 | 说明                 | 类型      | 默认值  |
| -------------------- | -------------------- | --------- | ------- |
| emptyMark            | 无效字段展示内容     | `string`  | `--`    |
| isZeroValid          | `0` 是否是有效数据   | `boolean` | `true`  |
| isDisplayUnitInValid | 无效数据是否展示单位 | `boolean` | `false` |


### Result

| 参数 | 说明       | 类型     | 默认值 |
| ---- | ---------- | -------- | ------ |
| data | 展示字段 | `string` | -      |

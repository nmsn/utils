---
title: formatDecimals2Percent
toc: false
---

## formatDecimals2Percent

数字转化百分比

<code src="./demo.tsx"></code>

### API

```typescript
type Options = {
  digit?: number;
  isThresholdInt?: boolean;
};

const data = formatDecimals2Percent(num: number, options: Options);
```

### Params

| 参数    | 说明               | 类型               | 默认值 |
| ------- | ------------------ | ------------------ | ------ |
| num     | 入参，待处理的字段 | `number` | -      |
| options | 配置项             | `Options`          | -      |

### Options

| 参数           | 说明                    | 类型      | 默认值 |
| -------------- | ----------------------- | --------- | ------ |
| digit          | 保留小数点后的位数      | `number`  | `2`    |
| isThresholdInt | `0 \| 1` 是否显示为整数 | `boolean` | `true` |


### Result

| 参数 | 说明     | 类型     | 默认值 |
| ---- | -------- | -------- | ------ |
| data | 展示字段 | `string` | -      |

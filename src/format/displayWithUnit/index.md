---
title: displayWithUnit
toc: false
---


## displayWithUnit

展示金额时携带单位

<code src="./demo.tsx"></code>

### API

```typescript
const data = displayWithUnit(num: string | number, unit: string, emptyMark: string = '--');
```

### Params

| 参数      | 说明                   | 类型               | 默认值 |
| --------- | ---------------------- | ------------------ | ------ |
| num       | 入参，待处理的字段     | `number \| string` | -      |
| unit      | 单位                   | `string`           | -      |
| emptyMark | 数据不存在时展示的内容 | `string`           | `--`   |

### Result

| 参数 | 说明       | 类型     | 默认值 |
| ---- | ---------- | -------- | ------ |
| data | 返回的字段 | `string` | -      |

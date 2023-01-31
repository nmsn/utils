---
title: formatSectionStr
toc: false
---

## formatSectionStr

合并区间值

### 特点

- 前后相同的值会自动进行合并
- 提供字符串或数组的入參形式

<code src="./demo.tsx"></code>

### API

```typescript
const data = formatSectionStr(data: string | (string | number)[], sign: string);
```

### Params

| 参数 | 说明               | 类型     | 默认值 |
| ---- | ------------------ | -------- | ------ |
| data  | 入参，待处理的字段 | `string | (string | number)[]` | -      |
| sign | 分割符号           | `string` | `-`     |


### Result

| 参数 | 说明     | 类型     | 默认值 |
| ---- | -------- | -------- | ------ |
| data | 展示字段 | `string` | -      |

---
title: toFraction
toc: false
---

## toFraction

约分

<code src="./demo.tsx"></code>

### API

```typescript
const data = toFraction(numerator: number, denominator: number, toStr?: boolean);
```

### Params

| 参数        | 说明             | 类型      | 默认值 |
| ----------- | ---------------- | --------- | ------ |
| numerator   | 分子             | `number`  | -      |
| denominator | 分母             | `number`  | -      |
| toStr       | 是否转化为字符串 | `boolean` | -      |

### Result

| 参数 | 说明                                   | 类型                         | 默认值 |
| ---- | -------------------------------------- | ---------------------------- | ------ |
| data | 分子分母约分后的数组或是转化后的字符串 | `string \| [number, number]` | -      |

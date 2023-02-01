---
title: toValidDecimal
toc: false
---

## toValidDecimal

保留数字有效位数

### 特点

- 可正常四舍五入
- 配置保留位数超过数字本身有效小数位数时，不会保留多余的 `0`

<code src="./demo.tsx"></code>

### API

```typescript
const data = toValidDecimal(num: number, digit?: number);
```

### Params

| 参数  | 说明             | 类型     | 默认值 |
| ----- | ---------------- | -------- | ------ |
| num   | 入參数字         | `number` | -      |
| digit | 保留有效小数位数 | `number` | `2`    |

### Result

| 参数 | 说明         | 类型     | 默认值 |
| ---- | ------------ | -------- | ------ |
| data | 转化后的数字 | `number` | -      |

---
title: addThousandSeparator
toc: false
---

## addThousandSeparator

`addThousandSeparator` 用于给金额增加逗号分隔符（只针对整数部分）

### 特点

- 支持负数
- 支持字符串形式的输入
- 不满足条件的输入会返回 ‘0’

<!-- 通过 code 标签配置 -->
<code src="./demo.tsx"></code>

### API

```typescript
const data: string = addThousandSeparator(money: number | string);
```


### Params

| 参数  | 说明                 | 类型               | 默认值 |
| ----- | -------------------- | ------------------ | ------ |
| money | 入参，待格式化的金额 | `number \| string` | -      |

### Result

| 参数 | 说明                   | 类型     | 默认值 |
| ---- | ---------------------- | -------- | ------ |
| data | 返回的格式化完成的金额 | `string` | `0`    |

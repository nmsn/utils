---
title: removeMultipleStrLeadingSpace
toc: false
---

## removeMultipleStrLeadingSpace

一处多行文本开头的多余空格
通常用于字符串生成代码片段的情况下使用

<code src="./demo.tsx"></code>

### API

```typescript
const data = removeMultipleStrLeadingSpace(str: string, keepBlankRow: boolean);
```

### Params

| 参数         | 说明           | 类型      | 默认值 |
| ------------ | -------------- | --------- | ------ |
| str          | 入字符串       | `string`  | -      |
| keepBlankRow | 是否保存换行符 | `boolean` | 'true' |

### Result

| 参数 | 说明           | 类型     | 默认值 |
| ---- | -------------- | -------- | ------ |
| data | 转化后的字符串 | `string` | ''     |

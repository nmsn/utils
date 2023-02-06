---
title: isValidMoney
toc: false
---

## isValidMoney

判断参数是否为有效的金额

<code src="./demo.tsx"></code>

### 特点

- 支持字符串形式的参数

### API

```typescript
const flag: boolean = isValidMoney(param: unknown);
```

### Params

| 参数  | 说明 | 类型  | 默认值 |
| ----- | ---- | ----- | ------ |
| param | 参数 | `number \| string` | -      |


### Result

| 参数 | 说明         | 类型      | 默认值  |
| ---- | ------------ | --------- | ------- |
| flag | 是否为有效的金额 | `boolean` | `false` |

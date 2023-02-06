---
title: isValidEnumValue
toc: false
---

## isValidEnumValue

判断参数是否为有效的枚举值

<code src="./demo.tsx"></code>

### 特点

- `options` 参数不传，默认判断范围为自然数
- `options` 参数存在的情况下，判断 `value` 是否在 `options` 集合当中

### API

```typescript
const flag: boolean = isValidEnumValue(value: number | string, options?: (string | number)[]);
```

### Params

| 参数    | 说明       | 类型     | 默认值     |
| ------- | ---------- | -------- | ---------- |
| value   | 入參       | `number  | string`    | - |
| options | 枚举值集合 | `(string | number)[]` | - |


### Result

| 参数 | 说明             | 类型      | 默认值  |
| ---- | ---------------- | --------- | ------- |
| flag | 是否为有效枚举值 | `boolean` | `false` |

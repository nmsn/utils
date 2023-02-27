---
title: useUniqueKey
toc: false
---

# useUniqueKey

用来在来可能出现相同 `key` 值的情况下获取唯一 `key` 值

<code src="./demo.tsx"></code>

## API

```typescript
const [getUniqueKey]: [(param: string) => string] = useStateCallback(suffix: string);
```

### Params

| 参数   | 说明             | 类型     | 默认值 |
| ------ | ---------------- | -------- | ------ |
| suffix | 定义的后缀字符串 | `string` | -      |


### Result

| 参数         | 说明                  | 类型                        | 默认值 |
| ------------ | --------------------- | --------------------------- | ------ |
| getUniqueKey | 获取唯一 `key` 的函数 | `(param: string) => string` | -      |



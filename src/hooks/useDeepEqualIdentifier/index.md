---
title: useDeepEqualIdentifier
toc: false
---

# useDeepEqualIdentifier

处理判断对象形式的依赖项是否发生变化

<code src="./demo.tsx"></code>

## API

```typescript
const flag = useDeepEqualIdentifier<T>(value: T): number;
```


### Params

| 参数  | 说明   | 类型  | 默认值 |
| ----- | ------ | ----- | ------ |
| value | 依赖项 | `any` | -      |

### Result

| 参数 | 说明                                         | 类型     | 默认值 |
| ---- | -------------------------------------------- | -------- | ------ |
| flag | 依赖项是否变更的标记，依赖项变更 flag 会自增 | `number` | 0      |

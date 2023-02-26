---
title: useLatest
toc: false
---

# useLatest

返回当前最新值的 Hook，可以避免闭包问题

<code src="./demo.tsx"></code>

## API

```typescript
const latestValueRef = useLatest<T>(value: T): MutableRefObject<T>;
```

### Params

| 参数  | 说明   | 类型 | 默认值 |
| ----- | ------ | ---- | ------ |
| value | 依赖项 | `T`  | -      |

### Result

| 参数           | 说明             | 类型                  | 默认值 |
| -------------- | ---------------- | --------------------- | ------ |
| latestValueRef | 最新数据的 `ref` | `MutableRefObject<T>` | -      |

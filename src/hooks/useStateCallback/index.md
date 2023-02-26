---
title: useStateCallback
toc: false
---

# useStateCallback

获取变更前的参数

<code src="./demo.tsx"></code>

## API

```typescript
type SetStateType<T> = (state: T, callback?: ((state: T) => void) | undefined) => void;

const [state, setState]: [T, SetStateType<T>] = useStateCallback(data: T);
```

### Params

| 参数 | 说明   | 类型 | 默认值 |
| ---- | ------ | ---- | ------ |
| data | 初始值 | `T`  | -      |


### Result

| 参数     | 说明       | 类型              | 默认值 |
| -------- | ---------- | ----------------- | ------ |
| state    | 上一次的值 | `T`               | -      |
| setState | 上一次的值 | `SetStateType<T>` | -      |


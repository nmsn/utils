---
title: useNoRenderState
toc: false
---

# useNoRenderState

用来存取不需要 `render` 刷新页面的数据，即使用 `useNoRenderState` 生成的 `setState` 执行不会导致组件重新渲染，同时需要使用生成的 `getState` 函数执行获取暂存数据

目的是存取不需要展示的数据，从而节省性能

<code src="./demo.tsx"></code>

## API

```typescript
const [getState, setState] = useNoRenderState(data: T);
```

### Params

| 参数 | 说明   | 类型  | 默认值 |
| ---- | ------ | ----- | ------ |
| data | 初始值 | `T` | -      |


### Params

| 参数     | 说明            | 类型                  | 默认值 |
| -------- | --------------- | --------------------- | ------ |
| getState | 获取 state 函数 | `（）=> T`          | -      |
| setState | 赋值 state 函数 | `(data: T) => void` | -      |

---
title: useNoRenderState
toc: false
---

# useNoRenderState

用来存取不需要 `render` 刷新页面的数据

<code src="./demo.tsx"></code>

## API

```typescript
const [getState, setState] = useNoRenderState(data: any);
```

### Params

| 参数 | 说明   | 类型  | 默认值 |
| ---- | ------ | ----- | ------ |
| data | 初始值 | `any` | -      |


### Params

| 参数     | 说明            | 类型                  | 默认值 |
| -------- | --------------- | --------------------- | ------ |
| getState | 获取 state 函数 | `（）=> any`          | -      |
| setState | 赋值 state 函数 | `(data: any) => void` | -      |

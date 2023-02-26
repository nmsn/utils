---
title: useRenderCount
toc: false
---

# useRenderCount

记录组件 `render` 的次数和是否是第一次 `render`

<code src="./demo.tsx"></code>

## API

```typescript
const [renderCount, isFirstRender] = useRenderCount();
```

### Result

| 参数          | 说明                  | 类型      | 默认值  |
| ------------- | --------------------- | --------- | ------- |
| renderCount   | `render` 的次数       | `number`  | `0`     |
| isFirstRender | 是否是第一次 `render` | `boolean` | `false` |

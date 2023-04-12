---
title: useOpen
toc: false
---

# useOpen

用来绑定 `Modal` `Drawer` 等打开行为的响应事件

<code src="./demo.tsx"></code>

## API

```typescript
useOpen(visible: boolean, callback: () => void);
```

### Params

| 参数     | 说明                    | 类型      | 默认值  |
| -------- | ----------------------- | --------- | ------- |
| visible  | 监听的开关状态          | `boolean` | `false` |
| callback | 回调函数 | `() => void` | -         |

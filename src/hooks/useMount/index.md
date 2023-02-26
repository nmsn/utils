---
title: useMount
toc: false
---

# useUnmount

在组件加载（mount）时执行的 Hook。

<code src="./demo.tsx"></code>

## API

```typescript
useMount(fn: () => void);
```

### Params

| 参数 | 说明                 | 类型         | 默认值 |
| ---- | -------------------- | ------------ | ------ |
| fn   | 组件加载时执行的函数 | `() => void` | -      |

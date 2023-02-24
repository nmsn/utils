---
title: useUnmount
toc: false
---

# useUnmount

在组件卸载（unmount）时执行的 Hook。

<code src="./demo.tsx"></code>

## API

```typescript
useUnmount(fn: () => void);
```

### Params

| 参数 | 说明                 | 类型         | 默认值 |
| ---- | -------------------- | ------------ | ------ |
| fn   | 组件卸载时执行的函数 | `() => void` | -      |

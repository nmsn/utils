---
title: useDidUpdate
toc: false
---

# useDidUpdate

依赖项变更执行回调函数，模拟 `componentDidUpdate`，用来避免 `useEffect` 初始化的执行

<code src="./demo.tsx"></code>

## API

```typescript
useDidUpdate<T>(value: T,callback: () => void): void;
```

### Params

| 参数     | 说明     | 类型       | 默认值 |
| -------- | -------- | ---------- | ------ |
| value    | 依赖项   | `any`      | -      |
| callback | 回调函数 | `function` | -      |

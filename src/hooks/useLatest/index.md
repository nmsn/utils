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

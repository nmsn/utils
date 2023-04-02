---
title: useClickAway
toc: false
---

# useClickAway

监听元素外部的点击事件

<code src="./demo.tsx"></code>

## API

```typescript
const defaultEvents = ['mousedown', 'touchstart'];

const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents,
)；
```

### Params

| 参数        | 说明               | 类型                             | 默认值                                 |
| ----------- | ------------------ | -------------------------------- | -------------------------------------- |
| ref         |                    | `RefObject<HTMLElement \| null>` | -                                      |
| onClickAway | 触发函数           | `(event: T) => void`             | -                                      |
| events      | 指定需要监听的事件 | `string[]`                       | `['click', 'mousedown', 'touchstart']` |

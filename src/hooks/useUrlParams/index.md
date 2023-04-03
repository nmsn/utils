---
title: useUrlParams
toc: false
---

# useUrlParams

同步 url 中参数的 Hook.

<code src="./demo.tsx"></code>

## API

```typescript
type UrlParamsType = Record<string, string | string[]>;

const [urlParams, setUrlParams] = useUrlParams(): [UrlParamsType, (params: UrlParamsType) => UrlParamsType];
```

### Return

| 参数         | 说明                             | 类型                                                         | 默认值 |
| ------------ | -------------------------------- | ------------------------------------------------------------ | ------ |
| urlParams    | 同步的数据对象                   | `UrlParamsType`                                              | `{}`   |
| setUrlParams | 赋值函数，可以接收数据对象和函数 | `UrlParamsType \| (params: UrlParamsType) => UrlParamsType` | -      |



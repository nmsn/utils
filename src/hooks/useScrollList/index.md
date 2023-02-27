---
title: useScrollList
toc: false
---

# useScrollList

移动端管理异步函数的标准`hook`，统一管理执行结果，执行函数，执行状态等必要数据，同时可以配置不同执行结果需要进行的回调

<code src="./demo.tsx"></code>

## API

```typescript
type ResScrollListType<L> = {
  list: L[];
  hasNextPage: boolean;
  pageSize: number;
  pageNum: number;
};

type ResType<T> = {
  data: T;
  flag: boolean;
  errorMsg: string;
  errorCode: number | string;
};

type ReqParamType<T, K> = {
  asyncFunc: (params: K) => Promise<ResType<T>> | ResType<T>;
  onCallback: (data: ResType<T>) => void;
  onSuccessCallback: (data: T) => void;
  onErrCallback?: (errorCode?: number | string, errorMsg?: string) => void;
};

type ReturnType<T, K> = {
  exec: (params: K) => Promise<T | null>;
  loading: boolean;
  isFirstLoading: boolean;
};

const { data, exec, loading, isFirstLoading } = useScrollList<T = Record<string, any>, K = Record<string, any>>({ asyncFunc, onCallback, onSuccessCallback, onErrCallback }: ReqParamType<ResScrollListType<L>, K>):  ReturnType<ResScrollListType<L>, K>;
```

### Params

| 参数   | 说明 | 类型                 | 默认值 |
| ------ | ---- | -------------------- | ------ |
| params | 入參 | `ReqParamType<T, K>` | -      |

### ResType

| 参数      | 说明         | 类型      | 默认值  |
| --------- | ------------ | --------- | ------- |
| data      | 返回的参数   | `T`       | -       |
| flag      | 执行完的标记 | `boolean` | `false` |
| errorMsg  | 报错信息     | `string`  | -       |
| errorCode | 错误码       | `string`  | -       |

### ReqParamType

| 参数              | 说明               | 类型                                                                       | 默认值 |
| ----------------- | ------------------ | -------------------------------------------------------------------------- | ------ |
| asyncFunc         | 执行函数           | `(params: K) => Promise<ResType<T>> \| ResType<T>`                         | -      |
| onCallback        | 执行完的回调函数   | `(data: ResType<T>) => void`                                               | -      |
| onSuccessCallback | 执行成功的回调函数 | `(data: T) => void`                                                        | -      |
| onErrCallback     | 执行失败的回调函数 | `(errorCode?: number                \| string, errorMsg?: string) => void` | -      |

### Result

| 参数   | 说明       | 类型               | 默认值 |
| ------ | ---------- | ------------------ | ------ |
| result | 返回的内容 | `ReturnType<T, K>` | -      |


### ReturnType

| 参数           | 说明                   | 类型                                | 默认值 |
| -------------- | ---------------------- | ----------------------------------- | ------ |
| data           | 异步函数直接结果       | `T`                                 | `null` |
| exec           | 执行函数               | `(params: K) => Promise<T \| null>` | -      |
| loading        | 是否是执行过程中       | `boolean`                           | -      |
| isFirstLoading | 是否是第一次执行过程中 | `boolean`                           | -      |



---
title: arr2Obj
toc: false
---

## arr2Obj

`[key, value]`形式的二维数组转化为对象

<!-- 通过 code 标签配置 -->
<code src="./demo.tsx"></code>

### API

```typescript
const data: { [key: string]: any } = arr2Obj(arr: [string, any][]);
```

### Params

| 参数 | 说明                                  | 类型              | 默认值 |
| ---- | ------------------------------------- | ----------------- | ------ |
| arr  | 入参，待转换的`[key, value]` 二维数组 | `[string, any][]` | -      |

### Result

| 参数 | 说明         | 类型                    | 默认值 |
| ---- | ------------ | ----------------------- | ------ |
| data | 转换完的对象 | `{ [key:string]: any }` | -      |

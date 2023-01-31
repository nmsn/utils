---
title: filterObjAttrs
toc: false
---


## filterObjAttrs

过滤对象属性

<code src="./demo.tsx"></code>

## API

```typescript
type Options = {
  filterAttrs?: string[];
  deleteAttrs?: string[];
  formatAttrs?: [string, (data: any) => any][];
};

const data = displayWithUnit(obj: { [key: string]: any}, options: Options);
```

### Params

| 参数    | 说明               | 类型                         | 默认值 |
| ------- | ------------------ | ---------------------------- | ------ |
| obj     | 入参，待处理的对象 | `{ [key: string]: any }` | -      |
| options | 配置项             | `Options`                    | -      |

### Options

| 参数        | 说明                     | 类型                                     | 默认值 |
| ----------- | ------------------------ | ---------------------------------------- | ------ |
| filterAttrs | 需要保留的属性           | `string[]`                               | `[]`   |
| deleteAttrs | 需要删除的属性           | `string[]`                               | `[]`   |
| formatAttrs | 需要处理的属性以及处理函数 | `[string, (data: any) => any][]` | `[]`   |


### Result

| 参数 | 说明     | 类型     | 默认值 |
| ---- | -------- | -------- | ------ |
| data | 返回的对象 | `{ [key: string]: any }` | -      |

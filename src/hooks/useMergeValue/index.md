---
title: useMergeValue
toc: false
---

# useMergeValue

帮助受控组件处理 value、defaultValue 的值

<code src="./demo.tsx"></code>

## API

```typescript
const [mergedValue, setState, stateValue] = useMergeValue<T>(
    defaultStateValue: T,
    props?: { defaultValue:?: T; value?: T }
  )
  : [T, React.Dispatch<React.SetStateAction<T>>, T];
```

### Params

| 参数              | 说明               | 类型 | 默认值 |
| ----------------- | ------------------ | ---- | ------ |
| defaultStateValue | `state` 默认值     | `T`  | -      |
| defaultValue      | `props` 默认初始值 | `T`  | -      |
| value             | `props` 值         | `T`  | -      |

### Result

| 参数      | 说明                                     | 类型                                      | 默认值 |
| --------- | ---------------------------------------- | ----------------------------------------- | ------ |
| result[0] | 经过是否 `undefined` 判断的 `stateValue` | `T`                                       | -      |
| result[1] | 执行函数                                 | `React.Dispatch<React.SetStateAction<T>>` | -      |
| result[2] | `stateValue`                             | `T`                                       | -      |

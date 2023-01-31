---
title: nameCaseTransform
toc: false
---

## nameCaseTransform

转化命名规范

<code src="./demo.tsx"></code>

### API

```typescript
type NameType = 'lowerCamel' | 'upperCamel' | 'snake' | 'kebab';

const data = nameCaseTransform(name: string, type: NameType);
```

### Params

| 参数 | 说明     | 类型       | 默认值 |
| ---- | -------- | ---------- | ------ |
| name | 入參名称 | `string`   | -      |
| type | 类型     | `NameType` | -      |

### NameType

| 参数       | 说明                   | 类型     | 默认值 |
| ---------- | ---------------------- | -------- | ------ |
| lowerCamel | 小驼峰 `testName`      | `string` | -      |
| upperCamel | 大驼峰 `TestName`      | `string` | -      |
| snake      | 蛇形命名法 `test_name` | `string` | -      |
| kebab      | 串式命名法 `test-name` | `string` | -      |

### Result

| 参数 | 说明         | 类型     | 默认值 |
| ---- | ------------ | -------- | ------ |
| data | 转化后的名称 | `string` | ''     |

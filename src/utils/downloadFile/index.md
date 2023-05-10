---
title: downloadFile
toc: false
---

## downloadFile

下载文件，避免浏览器默认行为，如图片pdf会被浏览器直接打开

<code src="./demo.tsx"></code>

### API

```typescript
downloadFile(url: string, name?: string);
```

### Params

| 参数 | 说明 | 类型     | 默认值 |
| ---- | ---- | -------- | ------ |
| url  | 资源地址 | `string` | -      |
| name | 覆盖的文件名 | `string` | -      |

import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'Utils',
    nav: [
      // { title: '指南', link: '/guide/test' },
      // TODO 目前木知道如何跳转直接导航到目录下第一个，先固定跳转路由
      { title: 'Hooks', link: '/hooks/useDeepEqualIdentifier' },
      { title: 'Format', link: '/formats/addThousandSeparator' },
      { title: 'Validator', link: '/validators/isAsyncFunction' },
      { title: 'GitHub', link: 'https://github.com/nmsn/utils.git' },
    ],
    footer: `Copyright © ${new Date().getFullYear()} nmsn`,
  },
  outputPath: 'docs-dist',
  resolve: {
    atomDirs: [
      { type: 'hooks', dir: '/src/hooks' },
      { type: 'format', dir: 'src/format' },
      { type: 'validator', dir: 'src/validator' },
    ],
    codeBlockMode: 'passive',
    forceKebabCaseRouting: false,
  },
});


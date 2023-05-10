import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'Utils',
    nav: [
      // TODO 目前木知道如何跳转直接导航到目录下第一个，先固定跳转路由
      { title: '指南', link: '/guide' },
      { title: 'Hooks', link: '/hooks/useClickAway' },
      { title: '转换', link: '/formats/addThousandSeparator' },
      { title: '校验', link: '/validators/isAsyncFunction' },
      { title: '工具', link: '/utils/downloadFile' },
    ],
    footer: `Copyright © ${new Date().getFullYear()} nmsn`,
    logo: '/logo.png',
  },
  favicons: ['/logo.png'],
  outputPath: 'docs-dist',
  resolve: {
    atomDirs: [
      { type: 'hooks', dir: '/src/hooks' },
      { type: 'format', dir: 'src/format' },
      { type: 'validator', dir: 'src/validator' },
      { type: 'utils', dir: 'src/utils' },
    ],
    codeBlockMode: 'passive',
    forceKebabCaseRouting: false,
  },
});

import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'Utils',
    nav: [
      // { title: '指南', link: '/guide/test' },
      { title: 'hooks', link: '/hooks' },
      { title: 'format', link: '/formats' },
      { title: 'validator', link: '/validators' },
      { title: 'GitHub', link: 'https://github.com/nmsn/utils.git' },
    ],
    footer: `Copyright © ${new Date().getFullYear()} nmsn`,
  },
  outputPath: 'docs-dist',
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'format', dir: 'src/format' },
      { type: 'validator', dir: 'src/validator' },
      { type: 'hook', dir: '/src/hooks' },
    ],
    codeBlockMode: 'passive',
  },
});

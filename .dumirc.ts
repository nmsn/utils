import { components } from './.dumi/tmp/dumi/meta/atoms';
import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'Utils',
    nav: [
      // { title: '指南', link: '/guide/test' },
      { title: 'hooks', link: '/hooks' },
      { title: 'format', link: '/formats' },
      { title: 'validator', link: '/validator' },
      { title: 'GitHub', link: 'https://github.com/nmsn/utils.git' },
    ],
    // sidebar: {
    //   '/format': [
    //     {
    //       title: '123',
    //       children: [
    //         {
    //           title: '3123',
    //           link: '/component/format/arr2Obj',
    //         },
    //       ],
    //     },
    //   ],
    // },
    footer: `Copyright © ${new Date().getFullYear()} nmsn`,
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'format', dir: 'src/format' },
      { type: 'hook', dir: '/src/hooks' },
    ],
    codeBlockMode: 'passive',
  },
});

// rollup.config.js
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.esm.mjs',
      format: 'esm',
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [peerDepsExternal(), typescript(), commonjs(), nodeResolve()],
};

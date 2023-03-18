import { terser } from 'rollup-plugin-terser';

import config from './rollup.config';

export default {
  ...config,
  plugins: [...config.plugins, terser()],
};

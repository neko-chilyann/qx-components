import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import eslint from '@rollup/plugin-eslint';

export const config: Config = {
  autoprefixCss: true,
  namespace: 'qx-context-menu',
  plugins: [sass()],
  rollupPlugins: {
    before: [eslint()],
  },
  bundles: [
    {
      components: ['scroll-decoration-bar'],
    },
    {
      components: ['zoom-container'],
    },
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  devServer: {
    port: 8080,
  },
};

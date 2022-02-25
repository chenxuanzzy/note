import { defineUserConfig } from 'vuepress';
import type { MixThemeConfig } from 'vuepress-theme-mix/lib/node';
import type { ViteBundlerOptions } from '@vuepress/bundler-vite';
import { navbar, sidebar, tags } from './configs';

const { path } = require('@vuepress/utils');

export default defineUserConfig<MixThemeConfig, ViteBundlerOptions>({
  // Site Config
  base: '/vuepress-mix-template/',
  lang: 'zh-TW',
  title: 'VuePress Mix Template',
  description:
    'Template repository for quickly building note site with VuePress and Mix Theme.',

  // Header
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],

  // Theme Config
  theme: 'vuepress-theme-mix',
  themeConfig: {
    logo: '/images/logo.png',
    title: 'VuePress Mix Template',

    navbar: navbar,
    sidebar: sidebar,
  },

  // Markdown Extends
  // [REF] https://v2.vuepress.vuejs.org/reference/plugin-api.html#extendsmarkdown
  extendsMarkdown: (md) => {
    // https://github.com/markdown-it/markdown-it-abbr
    md.use(require('markdown-it-abbr'));
    // https://github.com/tani/markdown-it-mathjax3
    md.use(require('markdown-it-mathjax3'));
  },

  // Plugin Config
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],

  // Bundler Config
  bundler: '@vuepress/vite',
  bundlerConfig: {
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tags.includes(tag),
        },
      },
    },
  },
});

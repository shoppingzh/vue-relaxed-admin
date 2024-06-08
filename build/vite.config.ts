import { defineConfig, } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin, } from 'vite-plugin-svg-icons'
import config from './config'
import DefineOptions from 'unplugin-vue-define-options/vite'
import jsx from '@vitejs/plugin-vue-jsx'
import multiPageRewritePlugin from './multi-page-rewrite-plugin'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  // 开发相关
  envPrefix: 'APP_',
  resolve: {
    alias: config.pages.reduce(
      (map, o) => {
        map[`@p-${o.name}`] = path.resolve(config.rootDir, `src/pages/${o.name}`)
        return map
      },
      {
        '@': path.resolve(config.rootDir, 'src'),
      }
    ),
  },
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api/': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  plugins: [
    // 多页应用路径重写（注：index单页不需要重写）
    config.multiPageRewrite && multiPageRewritePlugin({
      rewrites: config.pages.filter(o => o.name !== 'index').map(o => ({
        from: new RegExp(`^\\/mpa\\/${o.name}`),
        to: `/${o.name}.html`,
      })),
    }),
    vue(),
    jsx(),
    legacy({
      // 根据情况设置自己的浏览器版本，或在根目录下新建.browserslistrc文件设置
      // 为了让其他插件共享配置，更推荐配置文件的方式
      // targets: ['chrome>=96'],
    }),
    // SVG雪碧图
    createSvgIconsPlugin({
      iconDirs: [path.resolve(config.rootDir, 'src/icons/svg')],
      symbolId: 'svg-icon/[name]',
    }),
    // vue define options
    DefineOptions(),
  ],
  build: {
    rollupOptions: {
      // 多页支持
      input: config.pages.reduce((map, { name, }) => {
        map[name] = path.resolve(config.rootDir, `${name}.html`)
        return map
      }, {}),
    },
    minify: 'terser',
    sourcemap: true,
  },
})

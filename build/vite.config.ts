import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import config from './config'
import DefineOptions from 'unplugin-vue-define-options/vite'
import jsx from '@vitejs/plugin-vue-jsx'
import multiPageRewritePlugin from './multi-page-rewrite-plugin'

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
        target: 'http://localhost:7001/',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },

  plugins: [
    // 多页应用路径重写（注：index单页不需要重写）
    config.multiPageRewrite && multiPageRewritePlugin({
      rewrites: config.pages.filter(o => o.name !== 'index').map(o => ({
        from: new RegExp(`^\\/mpa\\/${o.name}`),
        to: `/${o.name}.html`,
      }))
    }),
    vue(),
    jsx(),
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
      input: config.pages.reduce((map, { name }) => {
        map[name] = path.resolve(config.rootDir, `${name}.html`)
        return map
      }, {}),
      output: {
        inlineDynamicImports: true,
      }
    },
    minify: 'terser'
  },
})

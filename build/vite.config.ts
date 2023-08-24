import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { ROOT_DIR, PAGES } from './config'
import DefineOptions from 'unplugin-vue-define-options/vite'
import jsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // 开发相关
  envPrefix: 'APP_',
  resolve: {
    alias: PAGES.reduce(
      (map, o) => {
        map[`@p-${o.name}`] = path.resolve(ROOT_DIR, `src/pages/${o.name}`)
        return map
      },
      {
        '@': path.resolve(ROOT_DIR, 'src'),
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
    vue(),
    jsx(),
    // SVG雪碧图
    createSvgIconsPlugin({
      iconDirs: [path.resolve(ROOT_DIR, 'src/icons/svg')],
      symbolId: 'svg-icon/[name]',
    }),
    // vue define options
    DefineOptions(),
  ],
  build: {
    rollupOptions: {
      // 多页支持
      input: PAGES.reduce((map, { name }) => {
        map[name] = path.resolve(ROOT_DIR, `${name}.html`)
        return map
      }, {}),
    },
  },
})

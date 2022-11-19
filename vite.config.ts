import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { readdirSync } from 'fs'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const pages = readdirSync(path.resolve(__dirname, './src/pages'), { withFileTypes: true })
  .filter(o => o.isDirectory() && !/^[._]/.test(o.name))
  .map(o => o.name)

// https://vitejs.dev/config/
export default defineConfig({
  // 开发相关
  envPrefix: 'APP_',
  resolve: {
    alias: pages.reduce((map, o) => {
      map[`@p-${o}`] = path.resolve(__dirname, `./src/pages/${o}`)
      return map
    }, {
      '@': path.resolve(__dirname, './src')
    })
  },
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api/': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        ws: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },


  // 构建相关
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'src/icons/svg')],
      symbolId: 'svg-icon/[name]',
    })
  ],
  build: {
    rollupOptions: {
      input: pages.reduce((map, name) => {
        map[name] = path.resolve(__dirname, `./${name}.html`)
        return map
      }, {})
    }
  }
})

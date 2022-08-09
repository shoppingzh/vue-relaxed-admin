import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { readdirSync } from 'fs'

const pages = readdirSync(path.resolve(__dirname, './src/pages'), { withFileTypes: true })
  .filter(o => o.isDirectory() && !/^[._]/.test(o.name))
  .map(o => o.name)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: pages.reduce((map, o) => {
      map[`@p-${o}`] = path.resolve(__dirname, `./src/pages/${o}`)
      return map
    }, {
      '@': path.resolve(__dirname, './src')
    })
  },
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: pages.reduce((map, name) => {
        map[name] = path.resolve(__dirname, `./${name}.html`)
        return map
      }, {})
    }
  }
})

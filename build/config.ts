import path from 'path'
import { readdirSync, } from 'fs'


export interface Page {
  name: string
  path?: string // 如'pages/dev'
  template?: string
}
export type Chunks = Record<string, string[]>
export interface CdnItem {
  /** 包名，如lodash */
  name: string
  /** 全局变量名，如lodash对应"_" */
  global: string
  /** 链接 */
  url: string
}

export interface Config {
  /** 根目录 */
  rootDir: string
  /** 单页集合 */
  pages: Page[]
  /** 在多页场景下，是否重写路径 */
  multiPageRewrite: boolean
  /** 是否压缩gzip包 */
  gzip: boolean
  /** 打包分包 */
  chunks: Chunks
  /** CDN配置 */
  cdns: CdnItem[]
}


function readPages(srcDir: string): Page[] {
  const pagesDir = path.resolve(srcDir, 'pages')
  let pages: Page[] = readdirSync(pagesDir, { withFileTypes: true, })
    .filter((o) => o.isDirectory() && !/^[._]/.test(o.name))
    .map((o) => ({ name: o.name, path: path.join('pages', o.name), }))
  if (!pages.length) {
    pages = [
      {
        name: 'index',
        path: '',
      },
    ]
  }

  return pages
}

const ROOT_DIR = path.resolve(__dirname, '..')

const PAGES = readPages(path.resolve(ROOT_DIR, 'src'))

export default {
  rootDir: ROOT_DIR,
  pages: PAGES,
  // 修改此配置，单页下的router base也要相应修改！！
  multiPageRewrite: false,
  gzip: false,
  chunks: {
    'app': ['vue', 'vue-router'],
  },
  cdns: [
    {
      name: 'vue',
      global: 'Vue',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.4.37/vue.global.min.js',
    }
  ],
} as Config

import path from 'path'
import { readdirSync } from 'fs'

export interface Page {
  name: string
  path?: string // 如'pages/dev'
  template?: string
}

function readPages(srcDir: string): Page[] {
  const pagesDir = path.resolve(srcDir, 'pages')
  let pages: Page[] = readdirSync(pagesDir, { withFileTypes: true })
    .filter((o) => o.isDirectory() && !/^[._]/.test(o.name))
    .map((o) => ({ name: o.name, path: path.join('pages', o.name) }))
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

const PAGES = readPages(path.resolve(ROOT_DIR, 'src')).filter(o => o.name !== 'dev')

export default {
  rootDir: ROOT_DIR,
  pages: PAGES,
  // 修改此配置，单页下的router base也要相应修改！！
  multiPageRewrite: true,
}

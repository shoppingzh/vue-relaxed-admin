/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent, } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly APP_API_PREFIX: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_NAME: string
  readonly APP_API_PREFIX: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

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

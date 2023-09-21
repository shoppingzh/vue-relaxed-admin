import { merge } from 'lodash'
import { MaybeRef, toReactive } from '@vueuse/core'
import useLoad, { LoadFn, UseLoadReturn } from 'magic-hooks/lib/useLoad'
import { computed, ComputedRef, reactive, Ref, ref, watch } from 'vue'

export interface PageQuery {
  page: number
  pageSize: number
}

export type PageProps<T extends object, LK extends keyof T> = {
  total?: keyof T
  list?: LK
}

export interface UseLoadPageOptions<Q, R extends object, LK extends keyof R = keyof R, L extends R[LK] = R[LK]> {
  onLoad: LoadFn<Q & PageQuery, R>
  query?: MaybeRef<Q>
  autoLoad?: boolean
  pageProps?: PageProps<R, LK>
}

export interface UseLoadPageReturn<Query, Result, LK, L> extends Pick<UseLoadReturn<Query, Result>, 'query' | 'loading'> {
  /** 分页查询条件 */
  pageQuery: PageQuery
  /** 当前页数据 */
  list: Ref<L[]>
  /** 总数 */
  total: Ref<number>
  /** 总页数 */
  totalPage: ComputedRef<number>
  /** 是否有上一页 */
  hasPrevPage: ComputedRef<boolean>
  /** 是否有下一页 */
  hasNextPage: ComputedRef<boolean>
  /** 重新加载 */
  reload: (remainPage?: boolean) => void
  /** 上一页 */
  prevPage: () => void
  /** 下一页 */
  nextPage: () => void
}

const DEFAULT_PAGE_PROPS: PageProps<any, any> = {
  total: 'total',
  list: 'data',
}

const PAGE_START = 1

export default function useLoadPage<Q extends object, R extends object, LK extends keyof R = keyof R, L extends R[LK] = R[LK]>(options: UseLoadPageOptions<Q, R, LK, L>): UseLoadPageReturn<Q, R, LK, L> {
  const { onLoad, autoLoad, pageProps } = options
  const pageQuery = reactive<PageQuery>({
    page: PAGE_START,
    pageSize: 10,
  })

  const { query, result: list, loading, load } = useLoad(onLoadPage, {
    autoLoad,
    initialQuery: toReactive(options.query || {} as Q),
    initialResult: [],
  })
  const total = ref(0)
  const totalPage = computed(() => Math.ceil(total.value / pageQuery.pageSize))
  const hasPrevPage = computed(() => pageQuery.page > PAGE_START)
  const hasNextPage = computed(() => pageQuery.page < totalPage.value)

  function onLoadPage(query: Q) {
    return new Promise<L[]>(async(resolve, reject) => {
      try {
        const props: PageProps<R, LK> = merge({}, DEFAULT_PAGE_PROPS, pageProps)
        const page = await onLoad(merge({}, query, pageQuery))
        total.value = page[props.total] as number

        resolve(page[props.list] as L[])
      } catch (err) {
        reject(err)
      }
    })
  }

  function reload(remainPage?: boolean) {
    if (!remainPage) {
      pageQuery.page = PAGE_START
    }
    load()
  }

  function toPage(page: number) {
    if (page <= PAGE_START || Number.isNaN(page)) {
      page = PAGE_START
    } else if (page > totalPage.value) {
      page = totalPage.value
    }
    pageQuery.page = page

    reload(true)
  }

  function prevPage() {
    toPage(pageQuery.page - 1)
  }

  function nextPage() {
    toPage(pageQuery.page + 1)
  }

  watch(pageQuery, () => reload(true), {
    deep: true,
  })

  return {
    pageQuery,
    query,
    loading,
    list,

    total,
    totalPage,
    hasPrevPage,
    hasNextPage,

    reload,
    prevPage,
    nextPage,
  }
}

// type Page<T = any> = {
//   total: number
//   data: T[]
// }
// type Query = {
//   keyword?: string
// }
// const { query, pageQuery, list, total } = useLoadPage({
//   onLoad: (query) => Promise.resolve({
//     total: 1000,
//     data: new Array(1000).fill('x').filter(o => String(o) === query.keyword),
//   } as Page<string>),
//   query: {
//     keyword: 'hello'
//   } as Query,
//   autoLoad: true,
//   pageProps: {
//     list: 'data' as keyof Page<string>,
//   },
// })
// query.keyword
// pageQuery.page
// pageQuery.pageSize
// const a = total.value + 1


// type Func = (a: boolean, b: number) => Promise<string>

// type P = Parameters<Func>
// type A = P[0]

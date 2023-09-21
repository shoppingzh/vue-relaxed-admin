import { merge } from 'lodash'
import { MaybeRef, toReactive } from '@vueuse/core'
import useLoad, { LoadFn, UseLoadReturn } from 'magic-hooks/lib/useLoad'
import { computed, ComputedRef, reactive, Ref, ref, watch } from 'vue'

export interface PageQuery {
  page: number
  pageSize: number
}

export type PageProps<T, LK> = {
  total?: keyof T
  list?: LK
}

export interface UseLoadPageOptions<Query, Result, LK> {
  onLoad: LoadFn<Query & PageQuery, Result>
  query?: MaybeRef<Query>
  autoLoad?: boolean
  pageProps?: PageProps<Result, LK>
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

export default function useLoadPage<Q extends object, R, LK extends keyof R, L extends R[LK]>(options: UseLoadPageOptions<Q, R, LK>): UseLoadPageReturn<Q, R, LK, L> {
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

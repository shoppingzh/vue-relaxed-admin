import { merge } from 'lodash'
import { MaybeRef, toReactive } from '@vueuse/core'
import useLoad, { LoadFn, UseLoadReturn } from 'magic-hooks/lib/useLoad'
import { computed, ComputedRef, reactive, Ref, ref, watch } from 'vue'

export interface PageQuery {
  page: number
  pageSize: number
}

export interface PageProps<TK, LK> {
  total?: TK
  list?: LK
}

export interface UseLoadPageOptions<Q, R, LK, LV> {
  onLoad: (query: Q & PageQuery) => Promise<R>
  query?: MaybeRef<Q>
  autoLoad?: boolean
  pageProps?: PageProps<keyof R, LK>
}

export interface UseLoadPageReturn<Query, Result, LK, LV> extends Pick<UseLoadReturn<Query, Result>, 'query' | 'loading'> {
  /** 分页查询条件 */
  pageQuery: PageQuery
  /** 当前页数据 */
  list: Ref<LV>
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

export default function useLoadPage<Q extends object, R extends object, LK extends keyof R, LV extends R[LK]>(options: UseLoadPageOptions<Q, R, LK, LV>): UseLoadPageReturn<Q, R, LK, LV> {
  const { onLoad, autoLoad, pageProps } = options
  const pageQuery = reactive<PageQuery>({
    page: PAGE_START,
    pageSize: 10,
  })

  const { query, result: list, loading, load } = useLoad(onLoadPage, {
    autoLoad,
    initialQuery: toReactive(options.query || {} as Q),
    initialResult: [] as LV,
  })
  const total = ref(0)
  const totalPage = computed(() => Math.ceil(total.value / pageQuery.pageSize))
  const hasPrevPage = computed(() => pageQuery.page > PAGE_START)
  const hasNextPage = computed(() => pageQuery.page < totalPage.value)

  function onLoadPage(query: Q) {
    return new Promise<LV>(async(resolve, reject) => {
      try {
        const props: PageProps<keyof R, LK> = merge({}, DEFAULT_PAGE_PROPS, pageProps)
        const page = await onLoad(merge({}, query, pageQuery))
        total.value = page[props.total] as number

        resolve(page[props.list] as LV)
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

// 以上函数调用时，当onLoad中不指定参数时，一切工作正常。

// 当onLoad中指定参数时，pageProps中的list字段会报错：不能将类型“string”分配给类型“never”

// 为什么？

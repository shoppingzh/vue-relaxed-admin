import { ref, reactive } from 'vue'

type LoadFn<E> = () => Promise<E>

export default function useLoad<E, Q extends object>(loadFn: LoadFn<E>, initialQuery: Q = {} as Q) {
  const data = ref<E>()
  const loading = ref<boolean>(false)
  const query = reactive<Q>({
    ...initialQuery
  })

  function load() {
    return new Promise(async(resolve, reject) => {
      try {
        loading.value = true
        data.value = await loadFn()

        resolve(data.value)
      } catch (err) {
        reject(err)
      } finally {
        loading.value = false
      }
    })
  }

  return {
    data,
    loading,
    query,
    load,
  }
}

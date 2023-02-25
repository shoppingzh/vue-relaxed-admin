import useAutoFocus from '@/hooks/useAutoFocus'
import { ElMessage, FormInstance } from 'element-plus'
import { merge } from 'lodash'
import { reactive, ref } from 'vue'

interface Options {
  autoFocusTimeout?: number
  successMessage?: string
  idKey?: string
}

const DEFAULT_OPTIONS: Options = {
  idKey: 'id'
}

export default function<T extends object>(
  initialModel: T,
  doSubmit: (model: T) => Promise<void>,
  doLoad?: () => Promise<T>,
  options?: Options
) {
  const model = reactive(initialModel)
  const elFormIns = ref<FormInstance>()
  const opts = merge({} as Options, DEFAULT_OPTIONS, options)
  const { input: firstFocusInputIns } = useAutoFocus(null, opts.autoFocusTimeout)
  const loading = ref(false)

  async function submit() {
    return new Promise<any>(async(resolve, reject) => {
      if (elFormIns.value) {
        try {
          await elFormIns.value.validate()
        } catch {
          return reject()
        }
      }

      try {
        loading.value = true
        const result = await doSubmit(model as T)

        // 消息
        if (opts.successMessage !== null) {
          ElMessage.success(`${opts.successMessage || '提交成功！'}`)
        }

        resolve(result)
      } catch (err) {
        reject(err)
      } finally {
        loading.value = false
      }
    })
  }

  async function load() {
    if (!doLoad) return
    console.log('load')
    const data = await doLoad()
    merge(model, data)
  }

  if (opts.idKey && (model as any)[opts.idKey]) {
    load()
  }

  return {
    model,
    loading,
    elFormIns,
    firstFocusInputIns,

    submit,
  }
}

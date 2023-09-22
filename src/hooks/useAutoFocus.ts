import { Ref, ref, watch } from 'vue'

interface Focusable {
  focus: () => void
}

export default function(initialInput?: Ref<Focusable>, timeout = 200) {
  const input = initialInput || ref<Focusable>()

  function focus() {
    if (!input.value) return
    setTimeout(() => {
      input.value.focus()
    }, timeout)
  }

  watch(input, () => {
    focus()
  })

  return {
    input
  }
}

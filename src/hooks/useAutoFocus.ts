import { onMounted, Ref, ref } from 'vue'

interface Focusable {
  focus: () => void
}

export default function(initialInput?: Ref<Focusable>) {
  const input = initialInput || ref<Focusable>()

  onMounted(() => {
    setTimeout(() => {
      input.value && input.value.focus()
    }, 100)
  })

  return {
    input
  }
}

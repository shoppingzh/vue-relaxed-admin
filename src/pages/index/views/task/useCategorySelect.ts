import * as api from '@/api/category'
import useLoad from 'magic-hooks/lib/useLoad'
import { Category } from '@/api/types'

export default function() {

  const { result: list, load } = useLoad<Category[], any>(api.list)

  load()

  return {
    list
  }
}

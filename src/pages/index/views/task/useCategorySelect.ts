import * as api from '@/api/category'
import useLoad from '../../hooks/useLoad'
import { Category } from '@/api/types'

export default function() {

  const { data: list, load } = useLoad<Category[], any>(api.list)

  load()

  return {
    list
  }
}

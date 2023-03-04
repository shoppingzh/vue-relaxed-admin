import { Task } from '@/api/types'

export const IMPORTANT_TEXT_MAP: Record<string, string> = {
  '-1': '不重要',
  '0': '重要',
  '1': '非常重要',
}

export const URGENT_TEXT_MAP: Record<string, string> = {
  '-1': '不紧急',
  '0': '紧急',
  '1': '非常紧急',
}

export function getPriority(task: Task): string {
  return `${IMPORTANT_TEXT_MAP[task.important]}${URGENT_TEXT_MAP[task.urgent]}`
}

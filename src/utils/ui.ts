import dayjs from 'dayjs'

export function createDateFormatter(formatTemplate?: string) {
  return (row: any, column: any, cellValue: any) => {
    return cellValue ? dayjs(cellValue).format(formatTemplate || 'YYYY-MM-DD') : ''
  }
}

interface Base {
  id?: number
  gmtCreate?: Date
  gmtModify?: Date
}

export interface Category extends Base {
  name?: string
}

export interface Task extends Base {
  title?: string
  description?: string
  target?: string
  important?: number
  urgent?: number
  weight?: number
  startTime?: Date
  endTime?: Date
  category?: Category
}

export interface Schedule extends Base {
  percent?: number
  description?: string
  task?: Task
}

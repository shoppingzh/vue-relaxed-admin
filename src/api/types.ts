interface Base {
  id?: number
  gmtCreate?: Date
  gmtModify?: Date
}

export interface Category extends Base {
  name?: string
  color?: string
}

export interface TaskParticipant extends Base {
  name?: string
}

export interface Task extends Base {
  title?: string
  description?: string
  wbs?: string
  target?: string
  important?: number
  urgent?: number
  weight?: number
  startTime?: Date | string
  endTime?: Date | string
  category?: Category
  participants?: TaskParticipant[]
}

export interface Schedule extends Base {
  percent?: number
  description?: string
  time?: Date
  task?: Task
}

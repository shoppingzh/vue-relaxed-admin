interface Base {
  id?: number
  gmtCreate?: Date
  gmtModify?: Date
}

export interface Globals extends Base {
  owner?: string
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
  // eslint-disable-next-line no-use-before-define
  scheduleList?: Schedule[]
}

export interface Schedule extends Base {
  percent?: number
  description?: string
  time?: Date
  task?: Task
}
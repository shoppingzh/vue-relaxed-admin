interface Base {
  id?: number
  gmtCreate?: Date
  gmtModify?: Date
}

export interface Page<T> {
  page?: number
  pageSize?: number
  total?: number
  data?: T[]
}

export interface Globals extends Base {
  owner?: string
}

export interface File extends Base {
  filename?: string
  contentType?: string
  size?: number
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

export interface KnowledgeCategory extends Base {
  name?: string
  children?: KnowledgeCategory[]
  parent?: KnowledgeCategory
}

export interface KnowledgeDocument extends Base {
  type?: 1 | 2
  title?: string
  no?: string
  level?: number
  time?: string
  file?: File
  fileId?: any
  category?: KnowledgeCategory
  categoryId?: any
}

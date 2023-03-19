import { type TODO_FILTERS } from './const'

export interface ITodo {
  id: number
  title: string
  completed: boolean
}

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

import { Method } from 'axios'

export interface APISetting {
  method: Method
  path: string
  baseURL?: string
  args: Record<string, any> | null
  body?: Record<string, any>
  res: Record<string, any>
}

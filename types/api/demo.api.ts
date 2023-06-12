import { Method } from 'axios'
import { APISetting } from '@/types/api/util'

export class UpdateTodo implements APISetting {
  method = 'PUT' as Method
  path = '/todos/${id}'
  baseURL = 'https://jsonplaceholder.typicode.com'
  res!: any[]

  constructor (
    public args: {
      id: string
    },
    public body: {
      content: string
    }
  ) {}
}

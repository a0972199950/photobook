import { Method } from 'axios'
import { APISetting } from '@/types/api/util'

export class GetBookinfo implements APISetting {
  method = 'GET' as Method
  path = '/book-info'
  args = null
  res!: BookInfo[]
}

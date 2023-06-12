import { UseQueryAPI, APISetting } from '@/apis/util'
import useQuery from '@/apis/hooks/useQuery'

interface GetBookInfoArgs {
  id: string
}

type GetBookInfoRes = BookInfo[]

export const useGetBookInfo: UseQueryAPI<GetBookInfoArgs, GetBookInfoRes> = (args, options) => {
  const setting: APISetting = {
    method: 'GET',
    path: '/book-info/{id}'
  }

  return useQuery(
    setting,
    args,
    options
  )
}

interface GetDemoTodoArgs {
  id: string | number
}

export const useGetDemoTodo: UseQueryAPI<GetDemoTodoArgs> = (args, options) => {
  const setting: APISetting = {
    method: 'GET',
    baseURL: 'https://jsonplaceholder.typicode.com',
    path: '/todos/{id}'
  }

  return useQuery(
    setting,
    args,
    options
  )
}

export interface Types {
  Demo: {
    GetDemoTodo: 'getDemoTodo'
  }
}

// export namespace Demo {
//   export interface Settings {
//     getDemoTodo: {
//       key: 'getDemoTodo'
//       url: 'https://jsonplaceholder.typicode.com/todos/{id}'
//       args: {
//         id: string | number
//       }
//     }
//   }
// }

export interface Settings {
  getDemoTodo: {
    url: 'https://jsonplaceholder.typicode.com/todos/{id}'
    args: {
      id: string | number
    }
  }

  noArgs: {
    url: 'https://google.com'
    args: null
  }
}

interface SingleSetting {
  path: string
  baseURL?: string
  args: Record<string, any> | null
}

export const useTypedSWR = <S extends SingleSetting>(
  ...params: S['args'] extends null
    ? [S['path']]
    : [S['path'], S['args']]
) => {
  const [url, args = null] = params
  console.log(url, args)
}

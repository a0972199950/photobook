import useSWR from 'swr'
import type { Method } from 'axios'
import { APISetting, QueryOptions } from '@/apis/util'
import client from '@/apis/client'
import replaceStringPlaceholder from '@/utils/replaceStringPlaceholder'

const isMutation = (method: Method) => {
  return ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase())
}

const getDefaultQueryFetcher = <Data = any>(setting: APISetting) =>
  async ([path, args]: [string, Record<string, any> | null]) => {
    const { method, baseURL } = setting

    const { data } = await client<Data>({
      method,
      url: replaceStringPlaceholder(path, args),
      baseURL,
      params: args
    })

    return data
  }

const useQuery = <Data = any>(
  setting: APISetting,
  args: Record<string, any> | null = {},
  options: QueryOptions<Data> = {}
) => {
  const { method, path } = setting
  const { skip, fetcher, swrConfig } = options

  if (isMutation(method)) {
    throw new Error(`useQuery is not for mutation, Please use useMutation instead. Got ${method.toUpperCase()} ${path}`)
  }
  
  return useSWR<Data>(
    skip ? null : [path, args],
    fetcher || getDefaultQueryFetcher<Data>(setting),
    swrConfig
  )
}

export default useQuery

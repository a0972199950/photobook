import useSWR, { Fetcher, SWRConfiguration } from 'swr'
import type { Method } from 'axios'
import client from '@/utils/httpClient'
import replaceStringPlaceholder from '@/utils/replaceStringPlaceholder'
import { APISetting } from '@/types/api/util'

interface QueryOptions<Data = any> {
  skip?: boolean
  fetcher?: Fetcher<Data>
  swrConfig?: SWRConfiguration
}

const isMutation = (method: Method) => {
  return ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase())
}

const getDefaultQueryFetcher = <Data = any>(apiSetting: APISetting) =>
  async ([path, args]: [string, Record<string, any> | null]) => {
    const { method, baseURL } = apiSetting

    const { data } = await client<Data>({
      method,
      url: replaceStringPlaceholder(path, args),
      baseURL,
      params: args
    })

    return data
  }

const useTypedSWR = <S extends APISetting>(
  apiSetting: S,
  options: QueryOptions<S['res']> = {}
) => {
  const { method, path, args } = apiSetting
  const { skip, fetcher, swrConfig } = options
  
  if (isMutation(method)) {
    throw new Error(`useQuery is not for mutation, Please use useMutation instead. Got ${method} ${path}`)
  }

  return useSWR<S['res']>(
    skip ? null : [path, args],
    fetcher || getDefaultQueryFetcher<S['res']>(apiSetting),
    swrConfig
  )
}

export default useTypedSWR

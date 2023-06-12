import useSWRMutation from 'swr/mutation'
import client from '@/utils/httpClient'
import replaceStringPlaceholder from '@/utils/replaceStringPlaceholder'
import { APISetting } from '@/types/api/util'

const getDefaultMutationFetcher = <Data = any>(apiSetting: APISetting) =>
  async (path: string, args: Record<string, any>) => {
    const { method, baseURL } = apiSetting

    const { data } = await client<Data>({
      method,
      url: replaceStringPlaceholder(path, args),
      baseURL,
      params: args
    })

    return data
  }

const useMutation = <Data = any>(
  setting: APISetting,
  args: Record<string, any> | null = {},
  options: MutationOptions<Data> = {}
) => {
  const { path } = setting
  const { skip, fetcher, swrConfig } = options
  
  return useSWRMutation(
    skip ? null : [path, args],
    fetcher || getDefaultMutationFetcher<Data>(setting),
    swrConfig
  )
}

export default useMutation

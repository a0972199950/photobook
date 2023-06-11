import useSWRMutation from 'swr/mutation'
import { APISetting, MutationOptions } from '@/apis/util'
import client from '@/apis/client'
import replaceStringPlaceholder from '@/utils/replaceStringPlaceholder'

const getDefaultMutationFetcher = <Data = any>(setting: APISetting) =>
  async (path: string, args: Record<string, any>) => {
    const { method, baseURL } = setting

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

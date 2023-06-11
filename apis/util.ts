import type { Method } from 'axios'
import type { SWRResponse, SWRConfiguration, Fetcher } from 'swr'
import type { SWRMutationConfiguration, MutationFetcher } from 'swr/mutation'

export interface APISetting {
  baseURL?: string
  method: Method
  path: string
}

export interface QueryOptions<Data = any> {
  skip?: boolean
  fetcher?: Fetcher<Data>
  swrConfig?: SWRConfiguration
}

export interface MutationOptions<Data = any> {
  skip?: boolean
  fetcher?: MutationFetcher<Data>
  swrConfig?: SWRMutationConfiguration<any, any>
}

export type UseQueryAPI<Args = any, Res = any> = (args: Args, options?: QueryOptions) => SWRResponse<Res>

export type UseMutationAPI<Args = any, Res = any> = (args: Args, options?: MutationOptions) => SWRResponse<Res>

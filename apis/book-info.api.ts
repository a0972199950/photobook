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

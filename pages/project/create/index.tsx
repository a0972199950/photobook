import * as React from 'react'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import axios from 'axios'
import classes from './style.module.scss'
import Title from '@/components/atoms/Title'
import { useGetDemoTodo, Settings, Types, Demo } from '@/apis/book-info.api'
import useTypedSWR from '@/hooks/useTypedSWR'
import { UpdateTodo } from '@/types/api/demo.api'
import { GetBookinfo } from '@/types/api/book-info.api'

const fetcher = async (url: string) => {
  const { data } = await axios.get(url)
  return data
}

const CreateProjectPage: React.FC = () => {
  const [id, setId] = React.useState('1')

  // const { data: todos } = useGetDemoTodo({ id })

  // const { data: todos } = useSWR(`https://jsonplaceholder.typicode.com/todos/${id}`, fetcher)

  // const { data: todos, trigger } = useSWRMutation(`https://jsonplaceholder.typicode.com/todos/${id}`, fetcher)
  // trigger()

  const a = useTypedSWR<GetBookinfo>(new GetBookinfo())
  
  const b = useTypedSWR<Settings['getDemoTodo']>('https://jsonplaceholder.typicode.com/todos/{id}', { id: 1 })

  const foo: API.BookInfo.GetBookinfo = { name: '' }
  console.log(foo)

  return (
    <>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <br />

      {JSON.stringify(todos)}
    </>
  )
}

export default CreateProjectPage

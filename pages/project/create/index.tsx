import * as React from 'react'
import classes from './style.module.scss'
import Title from '@/components/atoms/Title'
import { useGetBookInfo } from '@/apis/book-info.api'

const CreateProjectPage: React.FC = () => {
  const result = useGetBookInfo({ id: '2' })

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/hello')
      const json = await result.json()
      console.log(json)
    }

    fetchData()
  }, [])

  return (
    <>
      <Title className={classes.title}>製作相片書</Title>
      
    </>
  )
}

export default CreateProjectPage

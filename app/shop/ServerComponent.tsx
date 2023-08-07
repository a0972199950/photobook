import * as React from 'react'
interface Props {
  id: number
}

const ServerComponent: any = async ({ id }: Props) => {
  console.log('ServerComponent render start')

  await new Promise(resolve => setTimeout(resolve, 5000))

  console.log('ServerComponent promise end')

  return (
    <>
      <h1>Server component</h1>

      props:
      <ul>
        <li>id: {id}</li>
      </ul>
    </>
  )
}

export default ServerComponent

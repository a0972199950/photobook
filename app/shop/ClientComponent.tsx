'use client'
import * as React from 'react'
// import 'moment'
// import 'video.js'
// import 'lodash'
// import 'markdown'
// import 'quill'
// import 'hls.js'
// import 'lottie-web'

interface Props {
  id: number
}

const ClientComponent: React.FC<Props> = ({ id }) => {
  console.log('ClientComponent render')

  return (
    <>
      <h1>Client component</h1>

      props:
      <ul>
        <li>id: {id}</li>
      </ul>
    </>
  )
}

export default ClientComponent

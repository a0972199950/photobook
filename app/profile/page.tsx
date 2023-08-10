import * as React from 'react'
import { cookies } from 'next/headers'

// 1. 靜態 component，會被 cache。因為所有 fetch 都是靜態的
const _StaticComponent: () => Promise<React.ReactNode> = async () => {
  const _user1 = await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json()

  return (
    <></>
  )
}

// 2. 動態 component，不會被 cache。因為有其中一個 fetch (_user2) 是動態的
const _DynamicComponent1: () => Promise<React.ReactNode> = async () => {
  const _user1 = await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json()

  const _user2 = await (await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store'
  })).json()

  return (
    <></>
  )
}

// 3. 動態 component，不會被 cache。因為使用了動態 helper function `cookies()`
const _DynamicComponent2: () => Promise<React.ReactNode> = async () => {
  const _user = await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json()

  const _cookieStore = cookies()

  return (
    <></>
  )
}

// 4. 動態 component，不會被 cache。因為手動指定 dynamic = 'force-dynamic'
const _DynamicComponent3: () => Promise<React.ReactNode> = async () => {
  const _user = await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json()

  return (
    <></>
  )
}

export const dynamic = 'force-dynamic'

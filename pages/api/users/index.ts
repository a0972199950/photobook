import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (_req, res) => {
  try {
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()

    res.status(200).json(users)
  } catch (e) {
    console.error(e)
  }
}

export default handler

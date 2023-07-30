import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== 'GET') {
      res.status(405).json({ message: 'Method not allowed' })
      return
    }
    
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()

    res.status(200).json(users)
  } catch (e) {
    console.error(e)
  }
}

export default handler

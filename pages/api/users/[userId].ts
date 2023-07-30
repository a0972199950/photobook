import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== 'GET') {
      res.status(405).json({ message: 'Method not allowed' })
      return
    }
    
    const userId = req.query.userId
    const user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json()

    res.status(200).json(user)
  } catch (e) {
    console.error(e)
  }
}

export default handler

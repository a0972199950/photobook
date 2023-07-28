import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  try {
    const userId = req.query.userId
    const user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json()

    res.status(200).json(user)
  } catch (e) {
    console.error(e)
  }
}

export default handler

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === 'POST') {

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
        method: 'POST',
        body: JSON.stringify({ name: 'test' }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      res.status(200).json({ data })

    } catch (error) {
      res.status(400).json({ error })
    }
  }
}

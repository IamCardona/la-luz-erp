import { verifyIdToken } from 'next-firebase-auth'
import initAuth from './initAuth'
import type { NextApiRequest, NextApiResponse } from 'next'

initAuth()

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  if (!(req.headers && req.headers.authorization)) {
    throw 'Missing Authorization header value'
  }
  const token = req.headers.authorization
  
  if (token === 'unauthenticated') {
    throw 'Not authorized'
  } else {
    try {
      await verifyIdToken(token);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      throw 'Not authorized'
    }
  }
}

import { verifyIdToken } from 'next-firebase-auth'
import initAuth from './initAuth'
import type { NextApiRequest } from 'next'
import getRole from './getRole'

initAuth()

export default async function authorizedUsers(
  req: NextApiRequest,
  authorizedUsers: string[]
) {
  if (!req.headers.authorization) {
    throw 'Missing Authorization header value'
  }
  const token = req.headers.authorization
  const decodedToken = await verifyIdToken(token)

  const role = getRole(decodedToken.claims)

  if(!authorizedUsers.includes(role)) {
    throw "Not authorized"
  }
}
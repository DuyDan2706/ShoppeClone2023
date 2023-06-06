import { successReponse } from './until.type'
import { User } from './user.type'

export type AuthReponse = successReponse<{
  access_token: string
  expires: string
  user: User
}>

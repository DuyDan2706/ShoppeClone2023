import { ReponseApi } from './until.type'
import { User } from './user.type'

export type AuthReponse = ReponseApi<{
  access_token: string
  expires: string
  user: User
}>

import { User } from 'src/types/user.type'

export const saveAccessTokenLS = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}

export const clearAccessTokenFromls = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('profile')
}

export const getAccessTokenFromLs = () => localStorage.getItem('access_token') || ''

export const getProfileFromLs = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}

export const setProfiletols = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}

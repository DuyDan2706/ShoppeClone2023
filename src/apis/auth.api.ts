import { AuthReponse } from 'src/types/auth.type'
import http from 'src/utils/http'

const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return http.post<AuthReponse>('/register', body)
  },

  login(body: { email: string; password: string }) {
    return http.post<AuthReponse>('/login', body)
  },

  logout() {
    return http.post('/logout')
  }
}

export default authApi
// logout bi loi hay fix no

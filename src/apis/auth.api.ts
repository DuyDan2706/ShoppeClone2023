import { AuthReponse } from 'src/types/auth.type';
import http from 'src/utils/http';


export const registerAccount = (body: { email: string; password: string }) => http.post<AuthReponse>('/register', body)

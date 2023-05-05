import Request from '@/utils/request'
type LoginData = {
  phone: string
  password: string
  code?: string
}
type Response = {
  success: boolean
  state: number
  message: string
  content: string
}
export const loginApi = (data: LoginData) =>
  Request.post<Response>('/front/user/login', `phone=${data.phone}&password=${data.password}`)

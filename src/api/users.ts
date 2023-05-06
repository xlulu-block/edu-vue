import Request from '@/utils/request'
import { useTokenStore } from '@/stores/token'
type LoginData = {
  phone: string
  password: string
  code?: string
}
type loginResponse = {
  success: boolean
  state: number
  message: string
  content: string
}

type userResponse = {
  success: boolean
  state: number
  message: string
  content: {
    isUpdatePassword: boolean
    portrait: string
    userName: string
  }
}

type RToken = {
  success: boolean
  state: number
  message: string
  content: string
}
// type和interface的区别就是type必须一一对应，而interface可以多一个或者少一个。

// 登录接口
export const loginApi = (data: LoginData) =>
  Request.post<loginResponse>('/front/user/login', `phone=${data.phone}&password=${data.password}`)

// 用户信息接口
export const userInfoApi = () => Request.get<userResponse>('/front/user/getInfo')

// 无痛刷新token,query传参,post方式
// 避免多次刷新token
let PromiseRT: Promise<any>
let isFreshing = false
export const refreshTokenApi = () => {
  // 如果已经refreshing了，就不再请求了
  if (isFreshing) {
    return PromiseRT
  }
  isFreshing = true
  PromiseRT = Request.post<RToken>(
    `/front/user/refresh_token?refreshtoken=${useTokenStore().token?.refresh_token}`
  )
  return PromiseRT
}

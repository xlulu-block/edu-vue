import Request from '@/utils/request'
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
// type和interface的区别就是type必须一一对应，而interface可以多一个或者少一个。

// 登录接口
export const loginApi = (data: LoginData) =>
  Request.post<loginResponse>('/front/user/login', `phone=${data.phone}&password=${data.password}`)

// 用户信息接口
export const userInfoApi = () => Request.get<userResponse>('/front/user/getInfo')

import axios, { type AxiosRequestHeaders } from 'axios'
import { useTokenStore } from '@/stores/token'
const Request = axios.create()

// 请求拦截
Request.interceptors.request.use((config) => {
    // 如果没有header就创建一个
    if (!config.headers) {
        config.headers = {} as AxiosRequestHeaders
    }
    // 设置token
    const store = useTokenStore()
    config.headers.Authorization = store.token?.access_token
    return config
})

export default Request

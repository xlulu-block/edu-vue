import axios, { type AxiosRequestHeaders } from 'axios'
import { useTokenStore } from '@/stores/token'
import {refreshTokenApi} from '@/api/users'
import router from '@/router/index'
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
// 相应拦截
Request.interceptors.response.use((response)=>response, async (error) => {
    // 如果状态码是401则刷新token
    if (error.response.status === 401) {
        // 拿到无痛刷新的返回状态
        const {data} =await refreshTokenApi()
        // 如果成功，则保存新的token，并重新请求
        if (data.success) {
            useTokenStore().setToken(data.content)
            // 重新请求
            const config = error.config
            return Request(config)
        }else{
            // 提示请求失败，退出到登录页
            ElMessage.warning('请求失败，请重新登录')
            router.push({name:'login',query:{redirect:router.currentRoute.value.fullPath}})
            return 
        }
    }
    return Promise.reject(error)
})
export default Request

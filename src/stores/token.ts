import { defineStore } from 'pinia'
interface Token {
  access_token: string
  refresh_token: string,
  expires_token:number
}
export const useTokenStore = defineStore('myToken', () => {
  //初始值
  const tokenJson = ref('')

  //计算属性
  const token = computed<Token>(() => {
    try {
      return JSON.parse(tokenJson.value || localStorage.getItem('token') || '{}')//从store中取值
    } catch (error) {
      ElMessage.error('token解析失败')
      localStorage.setItem('token', '') //存储到本地
    }
  })
  // 处理函数
  function setToken(data: string) {
    tokenJson.value = data //存储到store
    localStorage.setItem('token', data) //存储到本地
  }
  return { token, setToken }
})

import axios from 'axios'
const Request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
})
export default Request

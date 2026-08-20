import axios from 'axios'
import { CONFIG } from '../config'

export const api = axios.create({
  baseURL: CONFIG.API_BASE_URL,
  timeout: CONFIG.API_TIMEOUT,
  headers: { 'Content-Type': 'application/json' }
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('dsk_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('dsk_token')
    }
    return Promise.reject(error)
  }
)

export function getErrorMessage(error) {
  return error?.response?.data?.message || error?.message || 'Something went wrong'
}
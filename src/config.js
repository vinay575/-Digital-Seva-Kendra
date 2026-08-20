const env = import.meta.env || {}

export const CONFIG = {
  API_BASE_URL: env.VITE_API_BASE_URL || '/api',
  API_TIMEOUT: Number(env.VITE_API_TIMEOUT || 15000),
  SITE_ID: env.VITE_SITE_ID || 'csce-governance',
  ENABLE_BACKEND: env.VITE_ENABLE_BACKEND === 'true' || env.VITE_ENABLE_BACKEND === undefined
}
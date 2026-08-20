import { api, getErrorMessage } from './api'
import { CONFIG } from '../config'
import siteData from '../data/siteData'

const ENDPOINTS = {
  services: '/services',
  testimonials: '/testimonials',
  partners: '/partners',
  stats: '/stats',
  siteConfig: '/site-config',
  contact: '/contact',
  register: '/register'
}

async function fetchCollection(key) {
  if (!CONFIG.ENABLE_BACKEND) return siteData[key]
  try {
    const { data } = await api.get(ENDPOINTS[key])
    return Array.isArray(data) && data.length ? data : siteData[key]
  } catch (err) {
    console.warn(`[api] Failed to fetch ${key}, using local fallback:`, getErrorMessage(err))
    return siteData[key]
  }
}

export async function getSiteContent() {
  const [services, testimonials, partners, stats] = await Promise.all([
    fetchCollection('services'),
    fetchCollection('testimonials'),
    fetchCollection('partners'),
    fetchCollection('stats')
  ])
  return { services, testimonials, partners, stats }
}

export async function submitContact(payload) {
  if (!CONFIG.ENABLE_BACKEND) {
    await new Promise((r) => setTimeout(r, 400))
    return { ok: true, message: 'Demo mode: message recorded locally.' }
  }
  const { data } = await api.post(ENDPOINTS.contact, payload)
  return data
}

export async function submitRegistration(payload) {
  if (!CONFIG.ENABLE_BACKEND) {
    await new Promise((r) => setTimeout(r, 400))
    return { ok: true, message: 'Demo mode: registration submitted locally.' }
  }
  const { data } = await api.post(ENDPOINTS.register, payload)
  return data
}
'use client'

import { ROUTES } from '@/shared/config'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/entities/user'

export const useLogout = () => {
  const clearAuth = useAuthStore((state) => state.clearAuth)
  const router = useRouter()

  const logout = () => {
    clearAuth()
    router.push(ROUTES.LOGIN)
  }

  return { logout }
}

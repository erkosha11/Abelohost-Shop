'use client'

import { create } from 'zustand'
import { AuthState } from '@/entities/user'

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  isInitialized: false,

  setAuth: (user, accessToken, refreshToken) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
    }
    set({ user, accessToken, refreshToken, isAuthenticated: true })
  },

  clearAuth: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    }
    set({ user: null, accessToken: null, refreshToken: null, isAuthenticated: false })
  },

  initAuth: () => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user')
      const accessToken = localStorage.getItem('accessToken')
      const refreshToken = localStorage.getItem('refreshToken')

      if (user && accessToken && refreshToken) {
        set({
          user: JSON.parse(user),
          accessToken,
          refreshToken,
          isAuthenticated: true,
          isInitialized: true
        })
      } else {
        set({ isInitialized: true })
      }
    }
  }
}))

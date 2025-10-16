'use client'

import { create } from 'zustand'
import { getErrorMessage } from '@/shared/lib'
import { VALIDATION, ROUTES } from '@/shared/config'
import { LoginFormState } from '@/features/auth/login'
import { userApi, useAuthStore } from '@/entities/user'

export const useLoginStore = create<LoginFormState>((set, get) => ({
  username: '',
  password: '',
  usernameError: '',
  passwordError: '',
  isLoading: false,
  error: null,

  setUsername: (value) => set({ username: value, usernameError: '' }),
  setPassword: (value) => set({ password: value, passwordError: '' }),

  validateForm: () => {
    const { username, password } = get()
    let isValid = true

    if (!username.trim()) {
      set({ usernameError: VALIDATION.REQUIRED_MESSAGE })
      isValid = false
    } else if (username.length < VALIDATION.MIN_LENGTH) {
      set({ usernameError: VALIDATION.MIN_LENGTH_MESSAGE })
      isValid = false
    } else {
      set({ usernameError: '' })
    }

    if (!password.trim()) {
      set({ passwordError: VALIDATION.REQUIRED_MESSAGE })
      isValid = false
    } else if (password.length < VALIDATION.MIN_LENGTH) {
      set({ passwordError: VALIDATION.MIN_LENGTH_MESSAGE })
      isValid = false
    } else {
      set({ passwordError: '' })
    }

    return isValid
  },

  login: async (router) => {
    const { username, password } = get()
    set({ isLoading: true, error: null })

    try {
      const response = await userApi.login({ username, password })
      const { accessToken, refreshToken, ...user } = response

      useAuthStore.getState().setAuth(user, accessToken, refreshToken)
      router.push(ROUTES.HOME)

      get().resetForm()
    } catch (err) {
      set({ error: getErrorMessage(err) })
    } finally {
      set({ isLoading: false })
    }
  },

  resetForm: () =>
    set({
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
      error: null
    })
}))

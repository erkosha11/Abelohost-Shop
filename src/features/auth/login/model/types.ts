export interface LoginFormState {
  username: string
  password: string
  usernameError: string
  passwordError: string

  isLoading: boolean
  error: string | null

  setUsername: (value: string) => void
  setPassword: (value: string) => void
  validateForm: () => boolean
  login: (router: { push: (path: string) => void }) => Promise<void>
  resetForm: () => void
}

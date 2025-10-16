'use client'

import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import styles from './LoginForm.module.scss'
import { useLoginStore } from '@/features/auth/login'
import { Input, Button, ErrorMessage } from '@/shared/ui'

export const LoginForm = () => {
  const router = useRouter()
  const {
    username,
    password,
    usernameError,
    passwordError,
    isLoading,
    error,
    setUsername,
    setPassword,
    validateForm,
    login
  } = useLoginStore()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validateForm()) {
      await login(router)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Login</h1>
      <p className={styles.subtitle}>Sign in to your account</p>

      {error && <ErrorMessage message={error} />}

      <Input
        id="username"
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={usernameError}
        placeholder="Enter your username"
        fullWidth
        disabled={isLoading}
      />

      <Input
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={passwordError}
        placeholder="Enter your password"
        fullWidth
        disabled={isLoading}
      />

      <Button type="submit" fullWidth isLoading={isLoading}>
        Login
      </Button>

      <div className={styles.hint}>
        <p>Test credentials:</p>
        <p>
          Username: <strong>emilys</strong>
        </p>
        <p>
          Password: <strong>emilyspass</strong>
        </p>
      </div>
    </form>
  )
}

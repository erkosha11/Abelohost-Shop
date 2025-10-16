'use client'

import { useAuthStore } from '@/entities/user/model/useAuthStore'
import styles from './Footer.module.scss'

export const Footer = () => {
  const { isAuthenticated, user } = useAuthStore()
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {currentYear}
          {isAuthenticated && user && (
            <span className={styles.userInfo}> · Logged as {user.email}</span>
          )}
        </p>
      </div>
    </footer>
  )
}

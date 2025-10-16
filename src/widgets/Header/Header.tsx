'use client'

import Link from 'next/link'
import { useAuthStore } from '@/entities/user/model/useAuthStore'
import { LogoutButton } from '@/features/auth/logout/ui/LogoutButton'
import { ROUTES } from '@/shared/config/constants'
import styles from './Header.module.scss'

export const Header = () => {
  const { isAuthenticated, user } = useAuthStore()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={ROUTES.HOME} className={styles.logo}>
          Abelohost
        </Link>

        <div className={styles.actions}>
          {isAuthenticated && user ? (
            <>
              <span className={styles.userName}>
                {user.firstName} {user.lastName}
              </span>
              <LogoutButton />
            </>
          ) : (
            <Link href={ROUTES.LOGIN} className={styles.loginLink}>
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

'use client'

import { Button } from '@/shared/ui'
import { useLogout } from '@/features/auth/logout'

export const LogoutButton = () => {
  const { logout } = useLogout()

  return (
    <Button variant="danger" onClick={logout}>
      Logout
    </Button>
  )
}

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  fullWidth?: boolean
  isLoading?: boolean
}

export const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  isLoading = false,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[variant],
        fullWidth && styles.fullWidth,
        isLoading && styles.loading,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <span className={styles.spinner} aria-label="Loading" /> : children}
    </button>
  )
}

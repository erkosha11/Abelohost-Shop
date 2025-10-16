import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/shared/lib'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, className, ...props }, ref) => {
    return (
      <div className={cn(styles.wrapper, fullWidth && styles.fullWidth)}>
        {label && (
          <label htmlFor={props.id} className={styles.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(styles.input, error && styles.error, className)}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'

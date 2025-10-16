import { cn } from '@/shared/lib'
import styles from './ErrorMessage.module.scss'

interface ErrorMessageProps {
  message: string
  className?: string
}

export const ErrorMessage = ({ message, className }: ErrorMessageProps) => {
  return (
    <div className={cn(styles.error, className)} role="alert">
      <svg
        className={styles.icon}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className={styles.message}>{message}</p>
    </div>
  )
}

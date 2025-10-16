import { cn } from '@/shared/lib'
import styles from './Loader.module.scss'

interface LoaderProps {
  size?: 'small' | 'medium' | 'large'
  fullScreen?: boolean
  className?: string
}

export const Loader = ({ size = 'medium', fullScreen = false, className }: LoaderProps) => {
  if (fullScreen) {
    return (
      <div className={styles.fullScreen}>
        <div className={cn(styles.spinner, styles[size], className)} />
      </div>
    )
  }

  return <div className={cn(styles.spinner, styles[size], className)} />
}

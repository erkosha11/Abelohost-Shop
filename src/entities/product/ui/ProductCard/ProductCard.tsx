import styles from './ProductCard.module.scss'
import { Product } from '@/entities/product'
import { formatPrice } from '@/shared/lib'
import { Button } from '@/shared/ui'
import Image from 'next/image'

interface ProductCardProps {
  product: Product
  isAuthenticated: boolean
}

export const ProductCard = ({ product, isAuthenticated }: ProductCardProps) => {
  const handleAddToCart = () => {
    console.log('Add to cart:', product.id)
  }

  return (
    <article className={styles.card}>
      <div>
        <Image
          src={product.thumbnail}
          alt={product.title}
          className={styles.image}
          width={300}
          height={300}
          priority={false}
        />
      </div>
      <div className={styles.text}>
        <h3>{product.title}</h3>
        <div className={styles.title}>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.price}>{formatPrice(product.price)}</p>
        </div>
        {isAuthenticated && (
          <Button onClick={handleAddToCart} fullWidth>
            Add to cart
          </Button>
        )}
      </div>
    </article>
  )
}

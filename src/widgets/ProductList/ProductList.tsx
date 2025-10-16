'use client'

import { useEffect } from 'react'
import { useProductStore } from '@/entities/product/model/useProductStore'
import { ProductCard } from '@/entities/product/ui/ProductCard/ProductCard'
import { Loader } from '@/shared/ui/Loader/Loader'
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage'
import { useAuthStore } from '@/entities/user/model/useAuthStore'
import styles from './ProductList.module.scss'

export const ProductList = () => {
  const { products, isLoading, error, fetchProducts } = useProductStore()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  if (isLoading) {
    return (
      <div className={styles.centerContent}>
        <Loader size="large" />
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.centerContent}>
        <ErrorMessage message={error} />
      </div>
    )
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} isAuthenticated={isAuthenticated} />
        ))}
      </div>
    </section>
  )
}

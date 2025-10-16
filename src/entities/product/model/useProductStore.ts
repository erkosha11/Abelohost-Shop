'use client'

import { create } from 'zustand'
import { getErrorMessage } from '@/shared/lib/utils'
import { ProductState, productApi } from '@/entities/product'

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await productApi.getProducts()
      set({ products: response.products, isLoading: false })
    } catch (err) {
      set({ error: getErrorMessage(err), isLoading: false })
    }
  }
}))

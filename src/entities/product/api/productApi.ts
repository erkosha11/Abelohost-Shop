import { apiClient } from '@/shared/api'
import { ProductsResponse } from '@/entities/product'
import { PRODUCTS_LIMIT } from '@/shared/config/constants'

export const productApi = {
  getProducts: async (limit = PRODUCTS_LIMIT): Promise<ProductsResponse> => {
    const response = await apiClient.get<ProductsResponse>('/products', {
      params: { limit }
    })
    return response.data
  }
}

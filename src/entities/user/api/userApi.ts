import { apiClient } from '@/shared/api'
import { AuthResponse, LoginCredentials } from '@/entities/user'

export const userApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/login', credentials)
    return response.data
  }
}

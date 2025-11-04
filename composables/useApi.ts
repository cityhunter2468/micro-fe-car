/**
 * Composable for API calls with automatic token injection
 */
export const useApi = () => {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase || 'http://localhost:3636'
  
  const apiFetch = async <T = any>(
    endpoint: string,
    options: any = {}
  ): Promise<T> => {
    const token = process.client ? localStorage.getItem('auth_token') : null
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...options.headers
    }
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }
    
    return $fetch<T>(`${apiBase}${endpoint}`, {
      ...options,
      headers
    })
  }
  
  return {
    apiFetch,
    apiBase
  }
}


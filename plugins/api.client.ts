export default defineNuxtPlugin(() => {
  // Auto-add Authorization header to all API requests
  const { $fetch } = useNuxtApp()
  
  // Intercept fetch requests to add token
  const originalFetch = globalThis.fetch
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url
    
    // Only add token for API requests to gateway
    if (process.client && url.includes('/api/')) {
      const token = localStorage.getItem('auth_token')
      
      if (token && init) {
        init.headers = {
          ...init.headers,
          'Authorization': `Bearer ${token}`
        }
      } else if (token) {
        init = {
          ...init,
          headers: {
            ...init?.headers,
            'Authorization': `Bearer ${token}`
          }
        }
      }
    }
    
    return originalFetch(input, init)
  }
})


export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated, checkAuth } = useAuth()
  
  // Check authentication status
  if (process.client) {
    checkAuth()
  }
  
  // Redirect to login if not authenticated
  if (!isAuthenticated.value && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login')
  }
})

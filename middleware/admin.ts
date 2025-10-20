export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated, isAdmin, checkAuth } = useAuth()
  
  // Check authentication status
  if (process.client) {
    checkAuth()
  }
  
  // Redirect to login if not authenticated
  if (!isAuthenticated.value) {
    return navigateTo('/login')
  }
  
  // Redirect to dashboard if not admin
  if (!isAdmin.value) {
    return navigateTo('/dashboard')
  }
})

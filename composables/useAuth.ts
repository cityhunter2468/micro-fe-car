export const useAuth = () => {
  const authStore = useAuthStore()
  
  return {
    user: computed(() => authStore.user),
    isAuthenticated: computed(() => authStore.isAuthenticated),
    isAdmin: computed(() => authStore.isAdmin),
    userName: computed(() => authStore.userName),
    login: authStore.login,
    register: authStore.register,
    logout: authStore.logout,
    checkAuth: authStore.checkAuth
  }
}

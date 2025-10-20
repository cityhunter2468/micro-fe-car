import { defineStore } from 'pinia'

export interface User {
  id: string
  email: string
  name: string
  role: 'user' | 'admin'
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    isAuthenticated: false
  }),

  getters: {
    isAdmin: (state) => state.user?.role === 'admin',
    userName: (state) => state.user?.name || 'User'
  },

  actions: {
    async login(email: string, password: string) {
      try {
        // Simulate API call
        const response = await $fetch('/api/auth/login', {
          method: 'POST',
          body: { email, password }
        })
        
        this.user = response.user
        this.token = response.token
        this.isAuthenticated = true
        
        // Store in localStorage
        if (process.client) {
          localStorage.setItem('auth_token', response.token)
          localStorage.setItem('user', JSON.stringify(response.user))
        }
        
        return { success: true }
      } catch (error: any) {
        console.error('Login error:', error)
        return { success: false, error: error?.message || 'Đăng nhập thất bại' }
      }
    },

    async register(userData: { name: string; email: string; password: string }) {
      try {
        const response = await $fetch('/api/auth/register', {
          method: 'POST',
          body: userData
        })
        
        this.user = response.user
        this.token = response.token
        this.isAuthenticated = true
        
        // Store in localStorage
        if (process.client) {
          localStorage.setItem('auth_token', response.token)
          localStorage.setItem('user', JSON.stringify(response.user))
        }
        
        return { success: true }
      } catch (error: any) {
        console.error('Register error:', error)
        return { success: false, error: error?.message || 'Đăng ký thất bại' }
      }
    },

    async logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      
      if (process.client) {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user')
      }
      
      // Use window.location for navigation in store
      if (process.client) {
        window.location.href = '/login'
      }
    },

    async checkAuth() {
      if (process.client) {
        const token = localStorage.getItem('auth_token')
        const userStr = localStorage.getItem('user')
        
        if (token && userStr) {
          try {
            const user = JSON.parse(userStr)
            this.user = user
            this.token = token
            this.isAuthenticated = true
            return true
          } catch (error) {
            console.error('Auth check error:', error)
            this.logout()
            return false
          }
        }
      }
      return false
    }
  }
})

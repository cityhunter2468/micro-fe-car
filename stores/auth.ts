import { defineStore } from 'pinia'
import { getUserFromToken } from '~/utils/jwt'

export interface User {
  id: string
  email?: string
  username: string
  name?: string
  role?: 'user' | 'admin'
  authorities?: string[]
}

export interface AuthState {
  user: User | null
  token: string | null
  refreshToken: string | null
  isAuthenticated: boolean
}

interface AuthApiResponse {
  result: boolean
  code: number
  message: string
  data: {
    accessToken?: string
    refreshToken?: string
    userId?: number
    username?: string
  }
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    refreshToken: null,
    isAuthenticated: false
  }),

  getters: {
    isAdmin: (state) => {
      if (!state.user?.authorities) return false
      return state.user.authorities.some(auth => auth.includes('ADMIN') || auth.includes('admin'))
    },
    userName: (state) => state.user?.name || state.user?.username || 'User',
    authorities: (state) => state.user?.authorities || []
  },

  actions: {
    async login(username: string, password: string) {
      try {
        const config = useRuntimeConfig()
        const apiBase = config.public.apiBase || 'http://localhost:3636'
        
        const response = await $fetch<AuthApiResponse>(`${apiBase}/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            username,
            password
          }
        })
        
        if (response.result && response.data.accessToken) {
          this.token = response.data.accessToken
          this.refreshToken = response.data.refreshToken || null
          
          // Decode JWT to get user info
          const userInfo = getUserFromToken(response.data.accessToken)
          if (userInfo) {
            this.user = {
              id: userInfo.id,
              username: userInfo.username,
              email: userInfo.email,
              authorities: userInfo.authorities,
              role: userInfo.authorities?.some(a => a.includes('ADMIN')) ? 'admin' : 'user'
            }
          }
          
          this.isAuthenticated = true
          
          // Store in localStorage
          if (process.client) {
            localStorage.setItem('auth_token', response.data.accessToken)
            if (response.data.refreshToken) {
              localStorage.setItem('refresh_token', response.data.refreshToken)
            }
            if (this.user) {
              localStorage.setItem('user', JSON.stringify(this.user))
            }
          }
          
          return { success: true }
        } else {
          return { success: false, error: response.message || 'Đăng nhập thất bại' }
        }
      } catch (error: any) {
        console.error('Login error:', error)
        const errorMessage = error?.data?.message || error?.message || 'Đăng nhập thất bại'
        return { success: false, error: errorMessage }
      }
    },

    async register(userData: { username: string; email: string; password: string; phone?: string }) {
      try {
        const config = useRuntimeConfig()
        const apiBase = config.public.apiBase || 'http://localhost:3636'
        
        const response = await $fetch<AuthApiResponse>(`${apiBase}/api/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            username: userData.username,
            email: userData.email,
            password: userData.password,
            phone: userData.phone || ''
          }
        })
        
        if (response.result && response.data.userId) {
          // After successful registration, automatically login
          return await this.login(userData.username, userData.password)
        } else {
          return { success: false, error: response.message || 'Đăng ký thất bại' }
        }
      } catch (error: any) {
        console.error('Register error:', error)
        const errorMessage = error?.data?.message || error?.message || 'Đăng ký thất bại'
        return { success: false, error: errorMessage }
      }
    },

    async logout() {
      try {
        // Call logout API if refresh token exists
        if (this.refreshToken && process.client) {
          const config = useRuntimeConfig()
          const apiBase = config.public.apiBase || 'http://localhost:3636'
          
          try {
            await $fetch(`${apiBase}/api/auth/logout`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
              },
              body: {
                refreshToken: this.refreshToken
              }
            })
          } catch (error) {
            console.error('Logout API error:', error)
            // Continue with logout even if API call fails
          }
        }
      } finally {
        this.user = null
        this.token = null
        this.refreshToken = null
        this.isAuthenticated = false
        
        if (process.client) {
          localStorage.removeItem('auth_token')
          localStorage.removeItem('refresh_token')
          localStorage.removeItem('user')
        }
        
        // Use window.location for navigation in store
        if (process.client) {
          window.location.href = '/login'
        }
      }
    },

    async checkAuth() {
      if (process.client) {
        const token = localStorage.getItem('auth_token')
        const refreshToken = localStorage.getItem('refresh_token')
        const userStr = localStorage.getItem('user')
        
        if (token) {
          try {
            // Verify token is still valid by decoding it
            const userInfo = getUserFromToken(token)
            if (userInfo) {
              this.token = token
              this.refreshToken = refreshToken
              
              if (userStr) {
                this.user = JSON.parse(userStr)
              } else {
                this.user = {
                  id: userInfo.id,
                  username: userInfo.username,
                  email: userInfo.email,
                  authorities: userInfo.authorities,
                  role: userInfo.authorities?.some(a => a.includes('ADMIN')) ? 'admin' : 'user'
                }
              }
              
              this.isAuthenticated = true
              return true
            } else {
              // Token is invalid, try refresh
              if (refreshToken) {
                return await this.refreshToken()
              }
            }
          } catch (error) {
            console.error('Auth check error:', error)
            this.logout()
            return false
          }
        }
      }
      return false
    },

    async refreshToken(): Promise<boolean> {
      try {
        if (!this.refreshToken) return false
        
        const config = useRuntimeConfig()
        const apiBase = config.public.apiBase || 'http://localhost:3636'
        
        const response = await $fetch<AuthApiResponse>(`${apiBase}/api/auth/refresh`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            refreshToken: this.refreshToken
          }
        })
        
        if (response.result && response.data.accessToken) {
          this.token = response.data.accessToken
          if (response.data.refreshToken) {
            this.refreshToken = response.data.refreshToken
          }
          
          // Update user info from new token
          const userInfo = getUserFromToken(response.data.accessToken)
          if (userInfo) {
            this.user = {
              id: userInfo.id,
              username: userInfo.username,
              email: userInfo.email,
              authorities: userInfo.authorities,
              role: userInfo.authorities?.some(a => a.includes('ADMIN')) ? 'admin' : 'user'
            }
          }
          
          if (process.client) {
            localStorage.setItem('auth_token', response.data.accessToken)
            if (response.data.refreshToken) {
              localStorage.setItem('refresh_token', response.data.refreshToken)
            }
            if (this.user) {
              localStorage.setItem('user', JSON.stringify(this.user))
            }
          }
          
          return true
        }
        return false
      } catch (error) {
        console.error('Refresh token error:', error)
        this.logout()
        return false
      }
    }
  }
})

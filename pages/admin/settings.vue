<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Cài đặt hệ thống</h1>
      <p class="mt-2 text-gray-600">Cấu hình các thông số hệ thống</p>
    </div>

    <form @submit.prevent="handleSave" class="space-y-8">
      <!-- General Settings -->
      <div class="card">
        <h3 class="text-lg font-medium text-gray-900 mb-6">Cài đặt chung</h3>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label for="siteName" class="block text-sm font-medium text-gray-700">Tên trang web</label>
            <input
              id="siteName"
              v-model="settings.siteName"
              type="text"
              class="mt-1 input-field"
              placeholder="Tên trang web"
            />
          </div>
          
          <div>
            <label for="siteUrl" class="block text-sm font-medium text-gray-700">URL trang web</label>
            <input
              id="siteUrl"
              v-model="settings.siteUrl"
              type="url"
              class="mt-1 input-field"
              placeholder="https://example.com"
            />
          </div>
          
          <div>
            <label for="adminEmail" class="block text-sm font-medium text-gray-700">Email quản trị</label>
            <input
              id="adminEmail"
              v-model="settings.adminEmail"
              type="email"
              class="mt-1 input-field"
              placeholder="admin@example.com"
            />
          </div>
          
          <div>
            <label for="timezone" class="block text-sm font-medium text-gray-700">Múi giờ</label>
            <select v-model="settings.timezone" class="mt-1 input-field">
              <option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh (GMT+7)</option>
              <option value="UTC">UTC (GMT+0)</option>
              <option value="America/New_York">America/New_York (GMT-5)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Security Settings -->
      <div class="card">
        <h3 class="text-lg font-medium text-gray-900 mb-6">Bảo mật</h3>
        <div class="space-y-6">
          <div>
            <label for="sessionTimeout" class="block text-sm font-medium text-gray-700">Thời gian hết hạn phiên (phút)</label>
            <input
              id="sessionTimeout"
              v-model.number="settings.sessionTimeout"
              type="number"
              min="5"
              max="1440"
              class="mt-1 input-field"
            />
          </div>
          
          <div>
            <label for="maxLoginAttempts" class="block text-sm font-medium text-gray-700">Số lần đăng nhập sai tối đa</label>
            <input
              id="maxLoginAttempts"
              v-model.number="settings.maxLoginAttempts"
              type="number"
              min="3"
              max="10"
              class="mt-1 input-field"
            />
          </div>
          
          <div class="flex items-center">
            <input
              id="requireEmailVerification"
              v-model="settings.requireEmailVerification"
              type="checkbox"
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label for="requireEmailVerification" class="ml-2 block text-sm text-gray-900">
              Yêu cầu xác thực email khi đăng ký
            </label>
          </div>
          
          <div class="flex items-center">
            <input
              id="enableTwoFactor"
              v-model="settings.enableTwoFactor"
              type="checkbox"
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label for="enableTwoFactor" class="ml-2 block text-sm text-gray-900">
              Bật xác thực hai yếu tố (2FA)
            </label>
          </div>
        </div>
      </div>

      <!-- Email Settings -->
      <div class="card">
        <h3 class="text-lg font-medium text-gray-900 mb-6">Cài đặt email</h3>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label for="smtpHost" class="block text-sm font-medium text-gray-700">SMTP Host</label>
            <input
              id="smtpHost"
              v-model="settings.smtpHost"
              type="text"
              class="mt-1 input-field"
              placeholder="smtp.gmail.com"
            />
          </div>
          
          <div>
            <label for="smtpPort" class="block text-sm font-medium text-gray-700">SMTP Port</label>
            <input
              id="smtpPort"
              v-model.number="settings.smtpPort"
              type="number"
              class="mt-1 input-field"
              placeholder="587"
            />
          </div>
          
          <div>
            <label for="smtpUsername" class="block text-sm font-medium text-gray-700">SMTP Username</label>
            <input
              id="smtpUsername"
              v-model="settings.smtpUsername"
              type="text"
              class="mt-1 input-field"
              placeholder="your-email@gmail.com"
            />
          </div>
          
          <div>
            <label for="smtpPassword" class="block text-sm font-medium text-gray-700">SMTP Password</label>
            <input
              id="smtpPassword"
              v-model="settings.smtpPassword"
              type="password"
              class="mt-1 input-field"
              placeholder="••••••••"
            />
          </div>
        </div>
      </div>

      <!-- Notification Settings -->
      <div class="card">
        <h3 class="text-lg font-medium text-gray-900 mb-6">Thông báo</h3>
        <div class="space-y-4">
          <div class="flex items-center">
            <input
              id="notifyNewUsers"
              v-model="settings.notifyNewUsers"
              type="checkbox"
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label for="notifyNewUsers" class="ml-2 block text-sm text-gray-900">
              Thông báo khi có người dùng mới đăng ký
            </label>
          </div>
          
          <div class="flex items-center">
            <input
              id="notifySystemErrors"
              v-model="settings.notifySystemErrors"
              type="checkbox"
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label for="notifySystemErrors" class="ml-2 block text-sm text-gray-900">
              Thông báo lỗi hệ thống
            </label>
          </div>
          
          <div class="flex items-center">
            <input
              id="notifySecurityAlerts"
              v-model="settings.notifySecurityAlerts"
              type="checkbox"
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label for="notifySecurityAlerts" class="ml-2 block text-sm text-gray-900">
              Thông báo cảnh báo bảo mật
            </label>
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="flex justify-end space-x-4">
        <button type="button" class="btn-secondary">
          Hủy
        </button>
        <button type="submit" :disabled="loading" class="btn-primary">
          {{ loading ? 'Đang lưu...' : 'Lưu cài đặt' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
// Require admin authentication
definePageMeta({
  middleware: 'admin'
})

// Settings data
const settings = reactive({
  siteName: 'Micro Frontend',
  siteUrl: 'http://localhost:3000',
  adminEmail: 'admin@example.com',
  timezone: 'Asia/Ho_Chi_Minh',
  sessionTimeout: 30,
  maxLoginAttempts: 5,
  requireEmailVerification: true,
  enableTwoFactor: false,
  smtpHost: 'smtp.gmail.com',
  smtpPort: 587,
  smtpUsername: '',
  smtpPassword: '',
  notifyNewUsers: true,
  notifySystemErrors: true,
  notifySecurityAlerts: true
})

const loading = ref(false)

const handleSave = async () => {
  loading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message
    alert('Cài đặt đã được lưu thành công!')
  } catch (error) {
    alert('Có lỗi xảy ra khi lưu cài đặt!')
  } finally {
    loading.value = false
  }
}

// Set page title
useHead({
  title: 'Cài đặt hệ thống - Micro Frontend'
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-2xl font-bold text-indigo-600">
              AutoDealer
            </NuxtLink>
            <div class="hidden md:ml-6 md:flex md:space-x-8">
              <NuxtLink to="/" class="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium">Trang chủ</NuxtLink>
              <NuxtLink to="/cars" class="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium">Xe ô tô</NuxtLink>
              <NuxtLink to="/contact" class="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium">Liên hệ</NuxtLink>
            </div>
          </div>
          
          <div class="flex items-center space-x-4">
            <template v-if="isAuthenticated">
              <NuxtLink to="/dashboard" class="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Dashboard
              </NuxtLink>
              <NuxtLink to="/admin" class="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Quản trị
              </NuxtLink>
              <span class="text-gray-700">Xin chào, {{ userName }}</span>
              <button 
                @click="logout" 
                class="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
              >
                Đăng xuất
              </button>
            </template>
            <template v-else>
              <NuxtLink to="/login" class="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Đăng nhập
              </NuxtLink>
              <NuxtLink to="/register" class="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                Đăng ký
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t mt-auto">
      <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">AutoDealer</h3>
            <p class="text-gray-600 text-sm">
              Hệ thống bán ô tô trực tuyến với dịch vụ chuyên nghiệp và giá cả cạnh tranh.
            </p>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-900 mb-4">Liên kết nhanh</h4>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="text-gray-600 text-sm hover:text-indigo-600">Trang chủ</NuxtLink></li>
              <li><NuxtLink to="/cars" class="text-gray-600 text-sm hover:text-indigo-600">Xe ô tô</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-gray-600 text-sm hover:text-indigo-600">Liên hệ</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-900 mb-4">Dịch vụ</h4>
            <ul class="space-y-2">
              <li><span class="text-gray-600 text-sm">Bán xe mới</span></li>
              <li><span class="text-gray-600 text-sm">Bán xe cũ</span></li>
              <li><span class="text-gray-600 text-sm">Lái thử</span></li>
              <li><span class="text-gray-600 text-sm">Bảo hành</span></li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-900 mb-4">Liên hệ</h4>
            <ul class="space-y-2">
              <li><span class="text-gray-600 text-sm">123 Đường ABC, Quận 1, TP.HCM</span></li>
              <li><span class="text-gray-600 text-sm">(028) 1234-5678</span></li>
              <li><span class="text-gray-600 text-sm">info@autodealer.com</span></li>
            </ul>
          </div>
        </div>
        <div class="border-t mt-8 pt-8">
          <p class="text-center text-gray-500 text-sm">
            © 2024 AutoDealer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { isAuthenticated, logout, userName } = useAuth()
</script>

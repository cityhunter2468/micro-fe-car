<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Quản lý hệ thống</h1>
        <p class="mt-2 text-gray-600">Trang quản trị dành cho quản trị viên AutoDealer</p>
      </div>

      <!-- Admin Stats -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div class="card">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-indigo-500 rounded-md flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 truncate">Tổng xe trong kho</dt>
                <dd class="text-lg font-medium text-gray-900">156</dd>
              </dl>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 truncate">Xe đã bán tháng này</dt>
                <dd class="text-lg font-medium text-gray-900">23</dd>
              </dl>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 truncate">Doanh thu tháng</dt>
                <dd class="text-lg font-medium text-gray-900">45.2 tỷ VNĐ</dd>
              </dl>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 truncate">Khách hàng tiềm năng</dt>
                <dd class="text-lg font-medium text-gray-900">89</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <!-- Admin Actions -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div class="card">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Quản lý xe ô tô</h3>
          <div class="space-y-3">
            <NuxtLink to="/cars" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <div>
                <p class="text-sm font-medium text-gray-900">Danh sách xe</p>
                <p class="text-sm text-gray-500">Xem và quản lý tất cả xe trong kho</p>
              </div>
            </NuxtLink>
            
            <NuxtLink to="/admin/cars/new" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <div>
                <p class="text-sm font-medium text-gray-900">Thêm xe mới</p>
                <p class="text-sm text-gray-500">Thêm xe mới vào kho</p>
              </div>
            </NuxtLink>

            <NuxtLink to="/admin/cars/sold" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p class="text-sm font-medium text-gray-900">Xe đã bán</p>
                <p class="text-sm text-gray-500">Quản lý lịch sử bán hàng</p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <div class="card">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Quản lý khách hàng</h3>
          <div class="space-y-3">
            <NuxtLink to="/admin/customers" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div>
                <p class="text-sm font-medium text-gray-900">Danh sách khách hàng</p>
                <p class="text-sm text-gray-500">Quản lý thông tin khách hàng</p>
              </div>
            </NuxtLink>
            
            <NuxtLink to="/admin/appointments" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p class="text-sm font-medium text-gray-900">Lịch hẹn</p>
                <p class="text-sm text-gray-500">Quản lý lịch hẹn lái thử</p>
              </div>
            </NuxtLink>

            <NuxtLink to="/admin/leads" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <p class="text-sm font-medium text-gray-900">Khách hàng tiềm năng</p>
                <p class="text-sm text-gray-500">Theo dõi khách hàng quan tâm</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="card">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Hoạt động gần đây</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Khách hàng</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thời gian</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Nguyễn Văn A</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mua Toyota Camry 2023</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 giờ trước</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Hoàn thành
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Trần Thị B</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Đặt lịch lái thử Honda CR-V</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 giờ trước</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    Đã xác nhận
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lê Văn C</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tư vấn Ford Mustang</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 giờ trước</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Đang theo dõi
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Require admin authentication
definePageMeta({
  middleware: 'admin'
})

const { userName, logout } = useAuth()

// Set page title
useHead({
  title: 'Quản lý hệ thống - AutoDealer'
})
</script>

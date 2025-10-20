<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Tìm xe ô tô
          <span class="text-indigo-600">mơ ước</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Khám phá bộ sưu tập xe ô tô đa dạng với giá cả hợp lý và dịch vụ chuyên nghiệp
        </p>
        <div class="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <NuxtLink 
              to="/cars" 
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Xem xe ngay
            </NuxtLink>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <NuxtLink 
              to="/contact" 
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Liên hệ tư vấn
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Search Section -->
      <div class="mt-16 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Tìm kiếm xe theo nhu cầu</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Hãng xe</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Tất cả hãng</option>
              <option>Toyota</option>
              <option>Honda</option>
              <option>Ford</option>
              <option>Hyundai</option>
              <option>Mazda</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Loại xe</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Tất cả loại</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Hatchback</option>
              <option>Coupe</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Giá từ</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Không giới hạn</option>
              <option>Dưới 500 triệu</option>
              <option>500 - 1 tỷ</option>
              <option>1 - 2 tỷ</option>
              <option>Trên 2 tỷ</option>
            </select>
          </div>
          <div class="flex items-end">
            <button class="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="mt-20">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Tại sao chọn AutoDealer?</h2>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="card text-center">
            <div class="flex justify-center mb-4">
              <div class="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100">
                <svg class="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Chất lượng đảm bảo</h3>
            <p class="text-gray-500">Tất cả xe đều được kiểm tra kỹ lưỡng và có bảo hành</p>
          </div>

          <div class="card text-center">
            <div class="flex justify-center mb-4">
              <div class="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100">
                <svg class="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Giá cả cạnh tranh</h3>
            <p class="text-gray-500">Giá tốt nhất thị trường với nhiều chương trình ưu đãi</p>
          </div>

          <div class="card text-center">
            <div class="flex justify-center mb-4">
              <div class="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100">
                <svg class="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Dịch vụ chuyên nghiệp</h3>
            <p class="text-gray-500">Đội ngũ tư vấn chuyên nghiệp, hỗ trợ 24/7</p>
          </div>
        </div>
      </div>

      <!-- Featured Cars Section -->
      <div class="mt-20">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Xe nổi bật</h2>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="card overflow-hidden flex flex-col h-full">
            <div class="aspect-w-16 aspect-h-9">
              <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                 alt="Toyota Camry" class="w-full h-48 object-cover">
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-semibold text-gray-900">Toyota Camry 2023</h3>
              <p class="text-gray-600 mt-2">Sedan cao cấp, tiết kiệm nhiên liệu</p>
              <div class="mt-auto pt-4">
                <div class="flex justify-between items-center">
                  <span class="text-2xl font-bold text-indigo-600">1.2 tỷ VNĐ</span>
                  <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="card overflow-hidden flex flex-col h-full">
            <div class="aspect-w-16 aspect-h-9">
              <img src="https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                 alt="Honda CR-V" class="w-full h-48 object-cover">
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-semibold text-gray-900">Honda CR-V 2023</h3>
              <p class="text-gray-600 mt-2">SUV 7 chỗ, không gian rộng rãi</p>
              <div class="mt-auto pt-4">
                <div class="flex justify-between items-center">
                  <span class="text-2xl font-bold text-indigo-600">1.5 tỷ VNĐ</span>
                  <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="card overflow-hidden flex flex-col h-full">
            <div class="aspect-w-16 aspect-h-9">
              <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                 alt="Ford Mustang" class="w-full h-48 object-cover">
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-semibold text-gray-900">Ford Mustang 2023</h3>
              <p class="text-gray-600 mt-2">Coupe thể thao, hiệu suất cao</p>
              <div class="mt-auto pt-4">
                <div class="flex justify-between items-center">
                  <span class="text-2xl font-bold text-indigo-600">2.8 tỷ VNĐ</span>
                  <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-8">
          <NuxtLink to="/cars" class="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700">
            Xem tất cả xe
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Set page title
useHead({
  title: 'Trang chủ - AutoDealer'
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900">Liên hệ với chúng tôi</h1>
        <p class="mt-4 text-lg text-gray-600">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn tìm được chiếc xe mơ ước
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="card">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Gửi tin nhắn</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
                <input
                  id="firstName"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Nhập họ và tên"
                />
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nhập email"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Chủ đề</label>
              <select
                id="subject"
                v-model="form.subject"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Chọn chủ đề</option>
                <option value="consultation">Tư vấn mua xe</option>
                <option value="test-drive">Đặt lịch lái thử</option>
                <option value="price">Hỏi giá xe</option>
                <option value="service">Dịch vụ sau bán hàng</option>
                <option value="other">Khác</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Tin nhắn *</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nhập tin nhắn của bạn"
              ></textarea>
            </div>

            <div v-if="error" class="rounded-md bg-red-50 p-4">
              <div class="text-sm text-red-700">
                {{ error }}
              </div>
            </div>

            <div v-if="success" class="rounded-md bg-green-50 p-4">
              <div class="text-sm text-green-700">
                {{ success }}
              </div>
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ loading ? 'Đang gửi...' : 'Gửi tin nhắn' }}
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <!-- Contact Details -->
          <div class="card">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Thông tin liên hệ</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">Địa chỉ</p>
                  <p class="text-sm text-gray-600">123 Đường ABC, Quận 1, TP.HCM</p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">Điện thoại</p>
                  <p class="text-sm text-gray-600">(028) 1234-5678</p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">Email</p>
                  <p class="text-sm text-gray-600">info@autodealer.com</p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">Giờ làm việc</p>
                  <p class="text-sm text-gray-600">Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                  <p class="text-sm text-gray-600">Thứ 7 - Chủ nhật: 8:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Test Drive Booking -->
          <div class="card">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Đặt lịch lái thử</h3>
            <p class="text-gray-600 mb-4">
              Trải nghiệm thực tế với chiếc xe bạn quan tâm. Chúng tôi sẽ liên hệ để xác nhận lịch hẹn.
            </p>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Xe quan tâm</label>
                <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Chọn xe</option>
                  <option>Toyota Camry 2023</option>
                  <option>Honda CR-V 2023</option>
                  <option>Ford Mustang 2023</option>
                  <option>Hyundai Tucson 2023</option>
                  <option>Mazda CX-5 2023</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Ngày hẹn</label>
                <input
                  type="date"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Giờ hẹn</label>
                <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Chọn giờ</option>
                  <option>09:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                </select>
              </div>
              <button class="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Đặt lịch lái thử
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Form data
const form = reactive({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)
const error = ref('')
const success = ref('')

const submitForm = async () => {
  loading.value = true
  error.value = ''
  success.value = ''
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    form.name = ''
    form.phone = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    
    success.value = 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.'
  } catch (err) {
    error.value = 'Có lỗi xảy ra, vui lòng thử lại sau.'
  } finally {
    loading.value = false
  }
}

// Set page title
useHead({
  title: 'Liên hệ - AutoDealer'
})
</script>

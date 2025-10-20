<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Danh sách xe ô tô</h1>
        <p class="mt-2 text-gray-600">Khám phá bộ sưu tập xe đa dạng với giá cả hợp lý</p>
      </div>

      <!-- Filters -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Bộ lọc tìm kiếm</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Hãng xe</label>
            <select v-model="filters.brand" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Tất cả hãng</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
              <option value="ford">Ford</option>
              <option value="hyundai">Hyundai</option>
              <option value="mazda">Mazda</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Loại xe</label>
            <select v-model="filters.type" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Tất cả loại</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
              <option value="coupe">Coupe</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Khoảng giá</label>
            <select v-model="filters.priceRange" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Không giới hạn</option>
              <option value="0-500">Dưới 500 triệu</option>
              <option value="500-1000">500 - 1 tỷ</option>
              <option value="1000-2000">1 - 2 tỷ</option>
              <option value="2000+">Trên 2 tỷ</option>
            </select>
          </div>
          <div class="flex items-end">
            <button @click="applyFilters" class="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>

      <!-- Results Count -->
      <div class="mb-6">
        <p class="text-gray-600">Tìm thấy <span class="font-semibold">{{ filteredCars.length }}</span> xe phù hợp</p>
      </div>

      <!-- Cars Grid -->
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="car in filteredCars" :key="car.id" class="card overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
          <div class="aspect-w-16 aspect-h-9">
            <img :src="car.image" :alt="car.name" class="w-full h-48 object-cover">
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-semibold text-gray-900">{{ car.name }}</h3>
              <span class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {{ car.year }}
              </span>
            </div>
            <p class="text-gray-600 mb-2">{{ car.brand }} • {{ car.type }}</p>
            <p class="text-gray-500 text-sm mb-4">{{ car.description }}</p>
            
            <!-- Car specs -->
            <div class="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div class="flex items-center">
                <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span class="text-gray-600">{{ car.engine }}</span>
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                <span class="text-gray-600">{{ car.seats }} chỗ</span>
              </div>
            </div>
            
            <div class="mt-auto pt-4">
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-indigo-600">{{ formatPrice(car.price) }}</span>
                <div class="flex space-x-2">
                  <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm">
                    Xem chi tiết
                  </button>
                  <button class="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 text-sm">
                    Liên hệ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="mt-12 flex justify-center">
        <nav class="flex items-center space-x-2">
          <button class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Trước
          </button>
          <button class="px-3 py-2 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded-md">
            1
          </button>
          <button class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            2
          </button>
          <button class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            3
          </button>
          <button class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Sau
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
// Sample car data
const cars = ref([
  {
    id: 1,
    name: 'Toyota Camry 2023',
    brand: 'Toyota',
    type: 'Sedan',
    year: '2023',
    price: 1200000000,
    engine: '2.5L Hybrid',
    seats: 5,
    description: 'Sedan cao cấp, tiết kiệm nhiên liệu',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    name: 'Honda CR-V 2023',
    brand: 'Honda',
    type: 'SUV',
    year: '2023',
    price: 1500000000,
    engine: '1.5L Turbo',
    seats: 7,
    description: 'SUV 7 chỗ, không gian rộng rãi',
    image: 'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    name: 'Ford Mustang 2023',
    brand: 'Ford',
    type: 'Coupe',
    year: '2023',
    price: 2800000000,
    engine: '5.0L V8',
    seats: 4,
    description: 'Coupe thể thao, hiệu suất cao',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Hyundai Tucson 2023',
    brand: 'Hyundai',
    type: 'SUV',
    year: '2023',
    price: 950000000,
    engine: '2.0L Turbo',
    seats: 5,
    description: 'SUV hiện đại, công nghệ tiên tiến',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    name: 'Mazda CX-5 2023',
    brand: 'Mazda',
    type: 'SUV',
    year: '2023',
    price: 1100000000,
    engine: '2.5L SkyActiv',
    seats: 5,
    description: 'SUV sang trọng, thiết kế đẹp mắt',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    name: 'Toyota Vios 2023',
    brand: 'Toyota',
    type: 'Sedan',
    year: '2023',
    price: 650000000,
    engine: '1.5L',
    seats: 5,
    description: 'Sedan tiết kiệm, phù hợp gia đình',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
])

// Filters
const filters = reactive({
  brand: '',
  type: '',
  priceRange: ''
})

// Computed filtered cars
const filteredCars = computed(() => {
  let result = cars.value

  if (filters.brand) {
    result = result.filter(car => car.brand.toLowerCase() === filters.brand)
  }

  if (filters.type) {
    result = result.filter(car => car.type.toLowerCase() === filters.type)
  }

  if (filters.priceRange) {
    const [min, max] = filters.priceRange.split('-').map(Number)
    if (max) {
      result = result.filter(car => car.price >= min * 1000000 && car.price <= max * 1000000)
    } else {
      result = result.filter(car => car.price >= min * 1000000)
    }
  }

  return result
})

// Methods
const applyFilters = () => {
  // Filters are applied reactively through computed property
  console.log('Applying filters:', filters)
}

const formatPrice = (price) => {
  if (price >= 1000000000) {
    return `${(price / 1000000000).toFixed(1)} tỷ VNĐ`
  } else {
    return `${(price / 1000000).toFixed(0)} triệu VNĐ`
  }
}

// Set page title
useHead({
  title: 'Danh sách xe ô tô - AutoDealer'
})
</script>

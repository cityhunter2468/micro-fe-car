# 🚀 Hướng dẫn chạy Frontend nhanh

## Bước 1: Kiểm tra Node.js
```bash
node --version
# Cần: v18.19.0+ hoặc v20.19.0+ hoặc v22.12.0+
```

Nếu chưa có hoặc version không đúng, xem `NODE_VERSION_GUIDE.md`

## Bước 2: Cài đặt dependencies (nếu chưa có)
```bash
cd micro-fe-car
npm install
```

## Bước 3: Đảm bảo backend services đang chạy
Trước khi chạy frontend, cần đảm bảo:
- ✅ **Eureka Server** đang chạy trên `http://localhost:8761`
- ✅ **Gateway-v1** đang chạy trên `http://localhost:3636`
- ✅ **Micro-auth** đang chạy và đã đăng ký với Eureka

Kiểm tra Eureka Dashboard: http://localhost:8761
- Xem có `gateway-v1` và `auth-service` trong danh sách không

## Bước 4: Chạy Frontend

### Windows:
```bash
# Cách 1: Dùng script
run.bat

# Cách 2: Dùng npm trực tiếp
npm run dev
```

### Linux/Mac:
```bash
npm run dev
```

## Bước 5: Truy cập ứng dụng
Mở browser và truy cập: **http://localhost:3000**

## Các trang chính:
- `/` - Trang chủ
- `/login` - Đăng nhập
- `/register` - Đăng ký
- `/dashboard` - Dashboard (cần đăng nhập)

## Troubleshooting

### Lỗi: Cannot connect to API
- ✅ Kiểm tra gateway-v1 có đang chạy không: http://localhost:3636
- ✅ Kiểm tra Eureka có đang chạy không: http://localhost:8761
- ✅ Kiểm tra micro-auth có đăng ký với Eureka không

### Lỗi: CORS error
- ✅ Kiểm tra gateway-v1 đã cấu hình CORS đúng chưa
- ✅ Kiểm tra `gateway-v1/src/main/resources/application.yml` có `allowedOrigins: "*"` không

### Lỗi: Node version không đúng
- Xem file `NODE_VERSION_GUIDE.md` để cài đặt Node.js đúng version

### Lỗi: Port 3000 đã được sử dụng
```bash
# Thay đổi port trong nuxt.config.ts
devServer: {
  port: 3001,  # Thay đổi port khác
  host: 'localhost'
}
```

## Kiểm tra kết nối API

1. Mở browser console (F12)
2. Truy cập trang login: http://localhost:3000/login
3. Thử đăng nhập với username/password
4. Kiểm tra Network tab để xem API call có thành công không

## Cấu hình API Base URL

Mặc định: `http://localhost:3636`

Để thay đổi, tạo file `.env`:
```env
API_BASE_URL=http://localhost:3636
```

Hoặc sửa trong `nuxt.config.ts`:
```typescript
runtimeConfig: {
  public: {
    apiBase: process.env.API_BASE_URL || 'http://localhost:3636'
  }
}
```


# Micro Frontend - Nuxt.js

Ứng dụng micro frontend được xây dựng với Nuxt.js 3, bao gồm các tính năng authentication, quản lý người dùng và giao diện quản trị.

## Tính năng

### 🔐 Authentication
- Đăng nhập / Đăng xuất
- Đăng ký tài khoản mới
- Quản lý phiên đăng nhập
- Middleware bảo vệ routes

### 👥 Quản lý người dùng
- Dashboard tổng quan
- Danh sách người dùng
- Phân quyền (User/Admin)
- Tìm kiếm và lọc

### ⚙️ Quản trị hệ thống
- Cài đặt hệ thống
- Quản lý cấu hình
- Thống kê và báo cáo
- Nhật ký hoạt động

## Cài đặt

### Yêu cầu hệ thống
- Node.js 18+ 
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Chạy ứng dụng
```bash
# Development
npm run dev

# Production build
npm run build
npm run preview
```

## Cấu trúc dự án

```
micro-fe/
├── assets/           # CSS và assets
├── components/       # Vue components
├── composables/      # Composables (useAuth, etc.)
├── layouts/          # Layout templates
├── middleware/       # Route middleware
├── pages/           # Pages và routing
├── server/          # API routes
├── stores/          # Pinia stores
└── nuxt.config.ts   # Nuxt configuration
```

## Sử dụng

### Tài khoản demo
- **Admin**: admin@example.com / admin123
- **User**: user@example.com / user123

### Routes chính
- `/` - Trang chủ
- `/login` - Đăng nhập
- `/register` - Đăng ký
- `/dashboard` - Dashboard (cần đăng nhập)
- `/admin` - Quản trị (cần quyền admin)

### API Endpoints
- `POST /api/auth/login` - Đăng nhập
- `POST /api/auth/register` - Đăng ký

## Công nghệ sử dụng

- **Nuxt.js 3** - Framework Vue.js
- **Tailwind CSS** - Utility-first CSS
- **Pinia** - State management
- **TypeScript** - Type safety
- **VueUse** - Vue composition utilities

## Phát triển

### Thêm trang mới
1. Tạo file trong `pages/` directory
2. Nuxt sẽ tự động tạo route
3. Sử dụng middleware để bảo vệ routes

### Thêm component
1. Tạo file trong `components/` directory
2. Import và sử dụng trong pages
3. Components được auto-import

### Thêm API route
1. Tạo file trong `server/api/` directory
2. Export default function handler
3. Sử dụng `$fetch` để gọi API

## Deployment

### Static hosting
```bash
npm run generate
# Upload dist/ folder to hosting
```

### Server deployment
```bash
npm run build
# Deploy .output/ folder to server
```

## License

MIT License

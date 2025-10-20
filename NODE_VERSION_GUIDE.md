# Hướng dẫn cài đặt Node.js

## Vấn đề hiện tại
Bạn đang sử dụng Node.js v21.7.3, nhưng các package yêu cầu phiên bản khác:
- Vite yêu cầu: `^20.19.0 || >=22.12.0`
- Nitropack yêu cầu: `^20.19.0 || >=22.12.0`
- Cssnano yêu cầu: `^18.12.0 || ^20.9.0 || >=22.0`

## Giải pháp được khuyến nghị

### 1. Sử dụng Node.js v18.19.0 (Khuyến nghị)
```bash
# Nếu có nvm
nvm install 18.19.0
nvm use 18.19.0

# Hoặc tải từ https://nodejs.org/en/download/
```

### 2. Sử dụng Node.js v20.19.0 (Tương thích tốt)
```bash
# Nếu có nvm
nvm install 20.19.0
nvm use 20.19.0
```

### 3. Sử dụng Node.js v22.12.0+ (Phiên bản mới nhất)
```bash
# Nếu có nvm
nvm install 22.12.0
nvm use 22.12.0
```

## Cài đặt NVM (Node Version Manager)

### Windows:
1. Tải NVM for Windows: https://github.com/coreybutler/nvm-windows
2. Cài đặt và restart terminal
3. Chạy: `nvm install 18.19.0 && nvm use 18.19.0`

### macOS/Linux:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18.19.0
nvm use 18.19.0
```

## Sau khi cài đặt Node.js phù hợp:

```bash
cd micro-fe
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Kiểm tra phiên bản:
```bash
node --version  # Nên hiển thị v18.19.0 hoặc v20.19.0
npm --version
```

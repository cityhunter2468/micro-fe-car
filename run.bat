@echo off
echo ========================================
echo   Micro Frontend - Nuxt.js
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] node_modules not found. Installing dependencies...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo [ERROR] Failed to install dependencies!
        pause
        exit /b 1
    )
    echo.
)

echo [INFO] Starting development server...
echo [INFO] Frontend will be available at: http://localhost:3000
echo [INFO] Make sure gateway-v1 is running on http://localhost:3636
echo [INFO] Make sure eureka-server is running on http://localhost:8761
echo [INFO] Make sure micro-auth is running and registered with Eureka
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev


export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  // Simulate authentication logic
  // In a real app, you would validate against a database
  if (email === 'admin@example.com' && password === 'admin123') {
    return {
      success: true,
      user: {
        id: '1',
        email: 'admin@example.com',
        name: 'Administrator',
        role: 'admin'
      },
      token: 'mock-jwt-token-admin'
    }
  }
  
  if (email === 'user@example.com' && password === 'user123') {
    return {
      success: true,
      user: {
        id: '2',
        email: 'user@example.com',
        name: 'Regular User',
        role: 'user'
      },
      token: 'mock-jwt-token-user'
    }
  }

  // Default user for demo
  if (email && password) {
    return {
      success: true,
      user: {
        id: '3',
        email: email,
        name: email.split('@')[0],
        role: 'user'
      },
      token: 'mock-jwt-token-' + Date.now()
    }
  }

  throw createError({
    statusCode: 401,
    statusMessage: 'Email hoặc mật khẩu không đúng'
  })
})

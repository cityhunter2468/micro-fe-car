export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, password } = body

  // Basic validation
  if (!name || !email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Vui lòng điền đầy đủ thông tin'
    })
  }

  if (password.length < 6) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Mật khẩu phải có ít nhất 6 ký tự'
    })
  }

  // Simulate user creation
  // In a real app, you would save to database
  const newUser = {
    id: Date.now().toString(),
    email: email,
    name: name,
    role: 'user'
  }

  return {
    success: true,
    user: newUser,
    token: 'mock-jwt-token-' + Date.now()
  }
})

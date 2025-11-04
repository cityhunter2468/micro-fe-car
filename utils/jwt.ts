/**
 * Decode JWT token without verification (client-side only)
 * Note: This is for client-side use only. Never trust client-side decoding for security.
 */
export function decodeJWT(token: string): any | null {
  try {
    const base64Url = token.split('.')[1]
    if (!base64Url) return null
    
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    )
    
    return JSON.parse(jsonPayload)
  } catch (error) {
    console.error('Error decoding JWT:', error)
    return null
  }
}

/**
 * Extract user information from JWT token
 */
export function getUserFromToken(token: string): { id: string; username: string; email?: string; authorities?: string[] } | null {
  const decoded = decodeJWT(token)
  if (!decoded) return null
  
  return {
    id: decoded.uid?.toString() || decoded.sub || '',
    username: decoded.sub || '',
    email: decoded.email,
    authorities: decoded.authorities || []
  }
}


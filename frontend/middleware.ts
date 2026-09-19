import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

const protectedRoutes = ['/profile', '/favorites', '/reviews', '/quotes']

export async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname
    const cookieStore = await cookies()
    const isAuth = cookieStore.get('connect.sid')

    const isProtectedRoute = protectedRoutes.some(route => path.includes(route))

	if (isAuth) {
		if (path.includes('/auth') ) {
			return NextResponse.redirect(new URL('/', request.url))
		}
	} else {
		if (isProtectedRoute) {
			return NextResponse.redirect(new URL('/auth/login', request.url))
		}
	}
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/auth/:path*', '/profile/:path*', '/favorites', '/reviews', '/quotes']
}

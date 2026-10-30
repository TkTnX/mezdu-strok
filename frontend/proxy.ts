import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { axiosInstance } from '@/shared'

const protectedRoutes = ['/profile', '/favorites', '/reviews', '/quotes']

export async function proxy(request: NextRequest) {
	const path = request.nextUrl.pathname
	const cookieStore = await cookies()
	const isAuth = cookieStore.get('connect.sid')
	const isProtectedRoute = protectedRoutes.some(route => path.includes(route))
	const { data: user } = await axiosInstance.get('users/me', {
		headers: {
			Cookie: `connect.sid=${isAuth?.value}`
		}
	})
	if (user) {
		if (path.includes('/auth') && path !== '/auth/register/more-info') {
			return NextResponse.redirect(new URL('/', request.url))
		}
		if (path.includes('/admin') && user.role !== 'ADMIN') {
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
	matcher: [
		'/auth/:path*',
		'/profile/:path*',
		'/favorites',
		'/reviews',
		'/quotes',
		'/admin'
	]
}

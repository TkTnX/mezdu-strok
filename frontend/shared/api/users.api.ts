import { axiosInstance } from '@/shared/lib'

export async function getMe() {
	const { data } = await axiosInstance.get('users/me')
	return data
}

export async function updateUser(body: FormData) {
	const { data } = await axiosInstance.patch('users/me', body)
	return data
}

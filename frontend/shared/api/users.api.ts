import { axiosInstance } from '@/shared/lib'
import { UpdateUserType } from '@/shared/resolvers'

export async function getMe() {
	const { data } = await axiosInstance.get('users/me')
	return data
}

export async function updateUser(body: UpdateUserType) {
	const { data } = await axiosInstance.patch('users/me', body)
	return data
}

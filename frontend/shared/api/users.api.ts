import { axiosInstance } from '@/shared/lib'

export async function getMe() {
	const { data } = await axiosInstance.get('users/me')
	return data
}

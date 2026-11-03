import { axiosInstance } from '@/shared/lib'

export const sendCodeToEmail = async (email: string, subject: string) => {
	const { data } = await axiosInstance.post('codes/send-code', {
		to: email,
		subject
	})

	return data
}

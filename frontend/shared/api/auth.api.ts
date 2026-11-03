import { axiosInstance } from "@/shared/lib"
import { ILogin, IRegister } from "@/shared/types"

export const login = async (body: ILogin) => {
    const { data } = await axiosInstance.post('auth/login', body)
    return data
}

export const register = async (body: Omit<IRegister, 'passwordRepeat'>) => {
	const { data } = await axiosInstance.post('auth/register', body)
	return data
}

export const logout = async () => {
    const { data } = await axiosInstance.post('auth/logout')
    return data
}
export const resetPassword = async (body: {
	code: string
	email: string
	newPassword: string
}) => {
	const { data } = await axiosInstance.post('auth/reset-password', body)
	return data
}


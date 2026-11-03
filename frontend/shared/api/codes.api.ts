import { axiosInstance } from "@/shared/lib"

export const sendCodeToEmail = async (email: string) => {
	const { data } = await axiosInstance.post('codes/send-code', email)

	return data
}

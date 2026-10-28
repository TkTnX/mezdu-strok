import { axiosInstance } from '@/shared/lib'
import { IAuthor } from '@/shared/types'

export const getAuthors = async ({
	take
}: {
	take: number
}): Promise<IAuthor[]> => {
	const { data } = await axiosInstance.get('authors', { params: { take } })
	return data
}

export const createAuthor = async (formData: FormData) => {
	const { data } = await axiosInstance.post('authors', formData)
	return data
}
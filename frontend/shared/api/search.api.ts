import { axiosInstance } from '@/shared/lib'
import { IAuthor, IBook, IGenre } from '@/shared/types'

export async function search(value: string): Promise<{books: IBook[], authors: IAuthor[], genres: IGenre[]}> {
	const { data } = await axiosInstance.get('search', { params: { value } })
	return data
}

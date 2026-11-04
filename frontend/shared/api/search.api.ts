import { axiosInstance } from '@/shared/lib'
import { IAuthor, IBook, IGenre } from '@/shared/types'
import { IStats } from '@/shared/types/stats.type'

export async function search(value: string): Promise<{books: IBook[], authors: IAuthor[], genres: IGenre[]}> {
	const { data } = await axiosInstance.get('search', { params: { value } })
	return data
}

export async function getStats(): Promise<IStats> {
	const { data } = await axiosInstance.get('search/stats')
	return data
}
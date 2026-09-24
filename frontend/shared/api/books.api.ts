import { axiosInstance } from '@/shared/lib'
import { ICreateBook } from '@/shared/types'

export const getBooks = async ({
	take,
	sort,
	query
}: {
	take?: number
	sort?: string
	query?: string
	}) => {
	const { data } = await axiosInstance.get(`books?take=${take}&sort=${sort}&${new URLSearchParams(query)}`)
	return data
}

export const getBookById = async (id: string) => {
	const { data } = await axiosInstance.get(`books/${id}`)
	return data
}

export const createBook = async (body: ICreateBook) => {
	const { data } = await axiosInstance.post('books', body)
	return data
}

export const addBookToFav = async (id: string) => {
	const { data } = await axiosInstance.post(`books/${id}/like`)
	return data
}

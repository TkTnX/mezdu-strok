import { createBook, getBookById, getBooks } from '@/shared/api'
import { IBook, ICreateBook } from '@/shared/types'
import { useMutation, useQuery } from '@tanstack/react-query'

export function useBooks() {
	const useGetBooks = () =>
		useQuery({
			queryKey: ['books'],
			queryFn: (): Promise<IBook[]> => getBooks()
		})

	const useGetBookById = (id: string) =>
		useQuery({
			queryKey: ['book', id],
			queryFn: (): Promise<IBook> => getBookById(id)
		})

	const useCreateBook = () =>
		useMutation({
			mutationFn: (data: ICreateBook): Promise<IBook> => createBook(data)
		})

	return {
		useGetBooks,
		useGetBookById,
		useCreateBook
	}
}

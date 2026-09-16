import { addBookToFav, createBook, getBookById, getBooks } from '@/shared/api'
import { IBook, ICreateBook } from '@/shared/types'
import {
	useMutation,
	UseMutationOptions,
	useQuery
} from '@tanstack/react-query'

export function useBooks() {
	const useGetBooks = ({ take, sort }: { take?: number; sort?: string }) =>
		useQuery({
			queryKey: ['books'],
			queryFn: (): Promise<IBook[]> => getBooks({ take, sort })
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

	const useAddBookToFav = (
		options?: Omit<
			UseMutationOptions<unknown, unknown, unknown>,
			'mutationFn'
		>
	) =>
		useMutation({
			mutationFn: (id: string) => addBookToFav(id),
			...options
		})

	return {
		useGetBooks,
		useGetBookById,
		useCreateBook,
		useAddBookToFav
	}
}

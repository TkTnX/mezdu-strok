'use client'
import { LibraryBook } from '@/entities'
import { ErrorMessage, Skeleton, useFavorites } from '@/shared'

export const FavoriteBooks = () => {
	const { useGetFavorites } = useFavorites()
	const { data, isPending, error } = useGetFavorites('books')

	if (error) return <ErrorMessage error={error} />
	return (
		<div>
			<h2 className='mt-4 text-2xl font-bold'>Книги</h2>
			<div className='mt-5 grid gap-3'>
				{isPending ? (
					[...new Array(5)].map((_, index) => (
						<Skeleton key={index} className='h-100 w-full' />
					))
				) : data.length > 0 ? (
					data.map(favorite => (
						<LibraryBook key={favorite.id} book={favorite.book!} />
					))
				) : (
					<p className='text-secondary text-center'>Избранных нет!</p>
				)}
			</div>
		</div>
	)
}

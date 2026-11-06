'use client'
import { Author } from '@/entities'
import { ErrorMessage, Skeleton, useFavorites } from '@/shared'

export const FavoriteAuthors = ({ userId }: { userId?: string }) => {
	const { useGetFavorites } = useFavorites()
	const { data, isPending, error } = useGetFavorites('authors', userId)

	if (error) return <ErrorMessage error={error} />
	return (
		<div>
			<h2 className='mt-4 text-2xl font-bold'>Авторы</h2>
			<div className='mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3'>
				{isPending ? (
					[...new Array(5)].map((_, index) => (
						<Skeleton key={index} className='h-100 w-full' />
					))
				) : data.length > 0 ? (
					data.map(favorite => (
						<Author key={favorite.id} author={favorite.author!} />
					))
				) : (
					<p className='text-secondary col-span-4 text-center'>
						Избранных нет!
					</p>
				)}
			</div>
		</div>
	)
}
 
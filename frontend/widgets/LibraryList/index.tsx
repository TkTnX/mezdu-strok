'use client'
import { LibraryBook } from '@/entities'
import { ErrorMessage, Skeleton, useBooks } from '@/shared'

export const LibraryList = () => {
	const { useGetBooks } = useBooks()
	const { data, isPending, error } = useGetBooks()

	if (error) return <ErrorMessage error={error} />

	return (
		<div className='vsm:grid-cols-1 mt-5 grid grid-cols-2 gap-2'>
			{isPending ? (
				[...new Array(6)].map((_, i) => (
					<Skeleton key={i} className='bg-accent-light h-40 w-full' />
				))
			) : data.length > 0 ? (
				data.map(book => <LibraryBook key={book.id} book={book} />)
			) : (
				<p className='text-secondary text-center'>Книги не найдены!</p>
			)}
		</div>
	)
}

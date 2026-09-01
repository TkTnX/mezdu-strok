'use client'
import { Book } from '@/entities'
import { ErrorMessage, Skeleton, useBooks } from '@/shared'
import Link from 'next/link'

export const RecentBooks = () => {
	const { useGetBooks } = useBooks()
	const { data, isPending, error } = useGetBooks({
		take: 4,
		sort: 'createdAt-desc'
	})

	return (
		<section className='mt-8'>
			<div className='flex flex-wrap justify-between gap-3 md:items-center'>
				<h2 className='text-2xl font-bold'>Недавно добавленные</h2>
				<Link
					className='text-main text-lg font-medium transition hover:opacity-80'
					href={'/library'}
				>
					Смотреть все
				</Link>
			</div>
			{error ? (
				<ErrorMessage error={error} />
			) : (
				<div className='mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4'>
					{isPending
						? [...new Array(4)].map((_, i) => (
								<Skeleton
									className='bg-accent-light h-100 w-full'
									key={i}
								/>
							))
						: data.map(book => <Book key={book.id} book={book} />)}
				</div>
			)}
		</section>
	)
}

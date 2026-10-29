'use client'
import { Book } from '@/entities'
import { cn, ErrorMessage, Skeleton, useBooks } from '@/shared'
import Link from 'next/link'

interface Props {
	className?: string
}

export const RecentBooks = ({ className }: Props) => {
	const { useGetBooks } = useBooks()
	const { data, isPending, error } = useGetBooks({
		sort: 'createdAt-desc'
	})

	return (
		<section className='mt-8'>
			<div className='flex flex-wrap justify-between gap-3 md:items-center'>
				<h2 className='text-2xl font-bold'>
					Недавно добавленные книги
				</h2>
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
				<div className={cn('mt-5 grid grid-cols-3 gap-3', className)}>
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

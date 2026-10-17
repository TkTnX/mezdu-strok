'use client'
import { Author } from '@/entities'
import { cn, ErrorMessage, Skeleton, useAuthors } from '@/shared'
import Link from 'next/link'

interface Props {
	className?: string
}

export const RecentAuthors = ({ className }: Props) => {
	const { useGetAuthors } = useAuthors()
	const { data, isPending, error } = useGetAuthors({ take: 4 })

	return (
		<section className='mt-8'>
			<div className='flex flex-wrap justify-between gap-3 md:items-center'>
				<h2 className='text-2xl font-bold'>
					Недавно добавленные авторы
				</h2>
				<Link
					className='text-main text-lg font-medium transition hover:opacity-80'
					href={'/authors'}
				>
					Смотреть все
				</Link>
			</div>
			{error ? (
				<ErrorMessage error={error} />
			) : (
				<div
					className={cn(
						'mt-5 grid grid-cols-3 gap-5 lg:grid-cols-4',
						className
					)}
				>
					{isPending
						? [...new Array(4)].map((_, i) => (
								<Skeleton
									className='bg-accent-light h-100 w-full'
									key={i}
								/>
							))
						: data.map(author => (
								<Author
									imageClassName={'w-30 h-30'}
									key={author.id}
									author={author}
								/>
							))}
				</div>
			)}
		</section>
	)
}

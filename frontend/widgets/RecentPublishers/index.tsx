'use client'
import { Publisher } from '@/entities'
import { cn, ErrorMessage, Skeleton, usePublishers } from '@/shared'
import Link from 'next/link'

interface Props {
	className?: string
}

export const RecentPublishers = ({ className }: Props) => {
	const { useGetPublishers } = usePublishers()
	const { data, isPending, error } = useGetPublishers({ take: 4 })

	return (
		<section className='mt-8'>
			<div className='flex flex-wrap justify-between gap-3 md:items-center'>
				<h2 className='text-2xl font-bold'>
					Недавно добавленные издания
				</h2>
				<Link
					className='text-main text-lg font-medium transition hover:opacity-80'
					href={'/publishers'}
				>
					Смотреть все
				</Link>
			</div>
			{error ? (
				<ErrorMessage error={error} />
			) : (
				<div
					className={cn(
						'mt-5 grid grid-cols-3 gap-3 lg:grid-cols-4',
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
						: data.map(publisher => (
								<Publisher
									key={publisher.id}
									publisher={publisher}
								/>
							))}
				</div>
			)}
		</section>
	)
}

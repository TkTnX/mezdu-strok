'use client'
import { Review } from '@/entities'
import { ErrorMessage, Skeleton, useReviews } from '@/shared'
import Link from 'next/link'

export const RecentReviews = () => {
	const { useGetReviews } = useReviews()
	const { data, isPending, error } = useGetReviews({ take: 2 })
	return (
		<section className='mt-8'>
			<div className='flex flex-wrap items-center justify-between gap-2'>
				<h2 className='text-2xl font-bold'>Последние рецензии</h2>
				<Link
					className='text-main text-lg font-medium transition hover:opacity-80'
					href={'/reviews'}
				>
					Смотреть все
				</Link>
			</div>
			<div className='mt-5 grid gap-5 xl:grid-cols-2'>
				{error ? (
					<ErrorMessage error={error} />
				) : isPending ? (
					[...new Array(2)].map((_, index) => (
						<Skeleton key={index} className='h-100 w-full' />
					))
				) : (
					data.map(review => (
						<Review key={review.id} review={review} />
					))
				)}
			</div>
		</section>
	)
}

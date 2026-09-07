'use client'
import { Review } from '@/entities'
import { ErrorMessage, Skeleton, useReviews } from '@/shared'
import { ReviewsSort } from './ReviewsSort'
import { useState } from 'react'

interface Props {
	bookId: string
}

export const Reviews = ({ bookId }: Props) => {
	const [sortBy, setSortBy] = useState('createdAt-desc')
	const { useGetReviews } = useReviews()
	const {
		data: reviews,
		isPending,
		error
	} = useGetReviews({ bookId, sortBy })
	// todo: add pagination
	return (
		<div className='mx-auto mt-5 max-w-285 rounded-xl'>
			<div className='flex flex-col justify-between gap-3 sm:flex-row sm:items-center'>
				<p className='text-4xl font-semibold sm:text-2xl'>Рецензии</p>
				<ReviewsSort setSortBy={setSortBy} />
			</div>
			<div className='mx-auto mt-10 grid max-w-200 gap-5'>
				{error ? (
					<ErrorMessage error={error} />
				) : isPending ? (
					[...new Array(3)].map((_, index) => (
						<Skeleton key={index} className='h-100 w-full' />
					))
				) : (
					reviews?.map(review => (
						<Review key={review.id} review={review} />
					))
				)}
			</div>
		</div>
	)
}

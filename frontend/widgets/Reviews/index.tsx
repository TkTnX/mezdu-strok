'use client'
import { Review } from '@/entities'
import { Button, ErrorMessage, IReview, Skeleton, useReviews } from '@/shared'
import { ReviewsSort } from './ReviewsSort'
import { useEffect, useState } from 'react'

interface Props {
	bookId?: string
	userId?: string
	isAdmin?: boolean
}

export const Reviews = ({ bookId, userId, isAdmin = false }: Props) => {
	const [items, setItems] = useState<IReview[]>([])
	const [page, setPage] = useState(0)
	const [sortBy, setSortBy] = useState('createdAt-desc')
	const { useGetReviews } = useReviews()
	const {
		data: reviews,
		isPending,
		error
	} = useGetReviews({ bookId, userId, sortBy, take: 8, page })

	useEffect(() => {
		if (!reviews) return
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setItems([...items, ...reviews.items])
	}, [reviews])

	useEffect(() => {
		if (!reviews) return
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setItems(reviews.items)

		setPage(0)
	}, [bookId, userId, sortBy, reviews])

	return (
		<div className='mt-4 rounded-xl'>
			<div className='flex flex-col justify-between gap-3 sm:flex-row sm:items-center'>
				{(bookId || (!bookId && !userId)) && (
					<h1 className='text-2xl font-bold sm:text-4xl'>Рецензии</h1>
				)}
				<ReviewsSort setSortBy={setSortBy} />
			</div>
			<div className='mx-auto mt-10 grid max-w-200 gap-5'>
				{error ? (
					<ErrorMessage error={error} />
				) : isPending ? (
					[...new Array(3)].map((_, index) => (
						<Skeleton key={index} className='h-100 w-full' />
					))
				) : items.length > 0 ? (
					items.map(review => (
						<Review
							setItems={setItems}
							isAdmin={isAdmin}
							key={review.id}
							review={review}
						/>
					))
				) : (
					<p className='text-secondary col-span-4 text-center'>
						Нет рецензий!
					</p>
				)}
				{reviews &&
					reviews.items.length > 0 &&
					reviews.currPage + 1 !== reviews.totalPages && (
						<Button
							onClick={() => setPage(reviews?.currPage + 1)}
							className={'h-10'}
						>
							Загрузить ещё
						</Button>
					)}
			</div>
		</div>
	)
}


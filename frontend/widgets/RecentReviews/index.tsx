import { Review } from '@/entities'
import Link from 'next/link'

export const RecentReviews = () => {
	return (
		<section className='mt-8'>
			<div className='flex items-center justify-between flex-wrap gap-2'>
				<h2 className='text-2xl font-bold'>Последние рецензии</h2>
				<Link
					className='text-main text-lg font-medium transition hover:opacity-80'
					href={'/reviews'}
				>
					Смотреть все
				</Link>
			</div>
			{/* <Review  className="mt-4" /> */}
		</section>
	)
}

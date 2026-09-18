import { LikeReview } from '@/features'
import { IReview } from '@/shared'
import Image from 'next/image'

type Props = {
	review: IReview
	className?: string
}

export const Review = ({ review, className }: Props) => {
	const user = review.user
	return (
		<div className={`bg-accent-light rounded-2xl p-2 ${className}`}>
			<div className='bg-main/10 flex items-center justify-between rounded-2xl p-2'>
				<div className='flex items-center gap-2'>
					<Image
						src={user?.avatar || '/images/users/user1.png'}
						alt={'User'}
						width={43}
						height={43}
						className='rounded-full'
					/>
					<p className='text-sm font-bold sm:text-base'>
						{`${user?.firstname || user?.lastname ? `${user?.firstname} ${user?.lastname}` : `@${user?.username}`}`}
					</p>
				</div>
				<div className='text-right'>
					<p className='text-main vsm:text-3xl text-2xl font-bold'>
						{review.rating}
					</p>
					<div className='flex items-center gap-1'>
						<button className='text-xs font-semibold text-[#2365c7] sm:text-base'>
							{review.story}
						</button>
						<button className='text-xs font-semibold text-[#2365c7] sm:text-base'>
							{review.characters}
						</button>
						<button className='text-xs font-semibold text-[#2365c7] sm:text-base'>
							{review.language}
						</button>
						<button className='text-xs font-semibold text-[#2365c7] sm:text-base'>
							{review.idea}
						</button>
						<button className='text-main text-xs font-semibold sm:text-base'>
							{review.impression}
						</button>
					</div>
				</div>
			</div>
			<h5 className='mt-2 text-xl font-bold md:text-2xl'>
				{review.title}
			</h5>
			<p className='mt-2 text-xs sm:text-base md:text-lg'>
				{review.review}
			</p>
			<p className='text-secondary text-xs'>
				{new Date(review.createdAt).toLocaleDateString('ru-RU')}
			</p>
			<LikeReview  likes={review.likes} id={review.id} />
		</div>
	)
}

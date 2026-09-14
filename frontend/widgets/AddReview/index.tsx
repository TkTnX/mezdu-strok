import { useUserStore } from '@/shared/stores'
import { AddReviewTop } from './AddReviewTop'

import { AddReviewForm } from '@/features'

interface Props {
	bookId: string
}

export const AddReview = ({ bookId }: Props) => {
	const { user } = useUserStore()
	return (
		<div className='w-full flex-1 lg:w-auto'>
			{!user && <AddReviewTop />}
			<div className='mt-2 rounded-2xl border'>
				<AddReviewForm bookId={bookId} />
			</div>
		</div>
	)
}

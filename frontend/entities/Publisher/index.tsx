import { DeleteButton } from '@/features'
import { IPublisher } from '@/shared'
import Link from 'next/link'

interface Props {
	publisher: IPublisher
	isAdmin?: boolean
}

export const Publisher = ({ publisher, isAdmin }: Props) => {
	return (
		<div className='relative'>
			<Link
				href={`/publishers/${publisher.id}`}
				className='bg-main rounded-2xl px-4 py-2 text-center text-white transition hover:opacity-80'
			>
				{publisher.name}
			</Link>
			{isAdmin && (
				<DeleteButton
					className='text-main static bg-transparent hover:bg-transparent'
					id={publisher.id}
					table={'publishers'}
				/>
			)}
		</div>
	)
}

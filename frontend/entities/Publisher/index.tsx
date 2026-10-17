import { IPublisher } from '@/shared'
import Link from 'next/link'

interface Props {
	publisher: IPublisher
}

export const Publisher = ({ publisher }: Props) => {
	return (
		<Link
			href={`/publishers/${publisher.id}`}
			className='bg-main rounded-2xl px-4 py-2 text-center text-white transition hover:opacity-80'
		>
			{publisher.name}
		</Link>
	)
}

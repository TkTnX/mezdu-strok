import { IAuthor } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	author: IAuthor
}

export const Author = ({ author }: Props) => {
	return (
		<Link
			className='flex w-fit flex-col text-center'
			href={`/authors/${author.id}`}
		>
			<div className='relative h-80 w-80'>
				<Image
					fill
					src={author.avatar}
					className='rounded-full object-cover'
					alt={author.name}
				/>
			</div>
			<p className='mt-auto text-2xl font-bold'>{author.name}</p>
			<p className='mt-2'>
				{author.bio.length > 100
					? author.bio.slice(0, 100) + '...'
					: author.bio}
			</p>
		</Link>
	)
}

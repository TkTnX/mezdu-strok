import { cn, IAuthor } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	author: IAuthor
	imageClassName?: string
}

export const Author = ({ author, imageClassName }: Props) => {
	return (
		<Link
			className='flex w-full flex-col items-center text-center'
			href={`/authors/${author.id}`}
		>
			<div className={cn('relative h-80 w-80', imageClassName)}>
				<Image
					fill
					src={author.avatar}
					className='rounded-full object-cover'
					alt={author.name}
					unoptimized
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

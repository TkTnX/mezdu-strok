import { IBook } from '@/shared'
import { BookAudioIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	book: IBook
}

export const Book = ({ book }: Props) => {
	return (
		<Link
			href={`/library/${book.id}`}
			className='flex w-full flex-col items-center text-center lg:block lg:text-left'
		>
			<div className='vsm:h-70 relative h-55 w-full max-w-55 sm:h-80'>
				{book.preview ? (
					<Image
						loading='eager'
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						src={book.preview}
						alt={book.title}
						className='rounded-lg'
					/>
				) : (
					<div className='bg-accent-light flex h-full w-full items-center justify-center rounded-xl text-center text-2xl'>
						{book.title}
					</div>
				)}
			</div>
			<h5 className='mt-3 max-w-55 text-lg font-semibold'>
				{book.title}
			</h5>
			<p className='text-secondary text-sm'>{book.author.name}</p>
			<div className='mt-3 flex items-center gap-2'>
				<BookAudioIcon />
				<p className='font-bold'>{book.rating ? book.rating : '?'}</p>
			</div>
		</Link>
	)
}

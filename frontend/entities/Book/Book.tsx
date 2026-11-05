import { DeleteButton } from '@/features'
import { IBook } from '@/shared'

import { BookAudioIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	book: IBook
	className?: string
	isAdmin?: boolean
}

export const Book = ({ book, isAdmin, className }: Props) => {
	return (
		<div className='relative w-full'>
			<Link
				href={`/library/${book.id}`}
				className={`flex  flex-col items-center text-center lg:block lg:text-left ${className}`}
			>
				<div className='relative h-80 w-full max-w-55'>
					{book.preview ? (
						<Image
							loading='eager'
							fill
							src={book.preview}
							alt={book.title}
							className='rounded-lg'
							unoptimized
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
					<p className='font-bold'>
						{book.rating ? book.rating : '?'}
					</p>
				</div>
			</Link>
			{isAdmin && <DeleteButton id={book.id} table={'books'} />}
		</div>
	)
}

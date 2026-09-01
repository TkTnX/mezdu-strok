import { IBook } from '@/shared'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	book: IBook
}

export const LibraryBook = ({ book }: Props) => {
	return (
		<div className='border-accent-light vsm:flex-row vsm:items-start hover:bg-accent-light relative flex flex-col items-center gap-5 rounded-lg border p-2 transition sm:p-4'>
			<Link
				href={`/library/${book.id}`}
				className='absolute inset-0'
			></Link>
			{book.preview ? (
				<Image
					src={book.preview}
					alt={book.title}
					width={100}
					className='rounded-lg'
					height={200}
				/>
			) : (
				<div className='bg-accent-light flex h-40 w-25 items-center justify-center rounded-xl text-center text-xs'>
					{book.title}
				</div>
			)}

			<div className='flex-1'>
				<h3 className='vsm:text-lg font-semibold'>{book.title}</h3>
				<p className='vsm:text-base text-secondary text-xs'>
					{book.author.name}
				</p>
				<div className='vsm:flex-row vsm:items-center mt-2 flex flex-col gap-2'>
					{book.tags.map((tag, i) => (
						<p
							className='text-secondary bg-accent-light rounded-lg px-2 py-1 text-center text-sm'
							key={i}
						>
							{tag}
						</p>
					))}
				</div>
				<div className='mt-4 flex flex-col-reverse justify-between gap-3 md:flex-row md:items-center'>
					<p className='text-secondary vsm:text-sm text-xs'>
						Добавлена{' '}
						{new Date(book.createdAt).toLocaleDateString('ru-RU', {
							day: 'numeric',
							month: 'long',
							year: 'numeric'
						})}
					</p>
					<div className='vsm:flex-row vsm:items-center flex flex-col items-center gap-5 lg:gap-10'>
						<p className='border-secondary flex h-10 w-10 items-center justify-center rounded-full border text-lg font-bold'>
							{book.rating || '?'}
						</p>
						<p className='text-secondary flex items-center gap-2'>
							<MessageCircle size={18} />
							{/* TODO: Склонения */}
							{book._count.reviews} отзывов
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

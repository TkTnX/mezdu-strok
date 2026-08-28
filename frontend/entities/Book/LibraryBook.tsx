import { MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const LibraryBook = () => {
	return (
		<div className='border-accent-light vsm:flex-row vsm:items-start flex flex-col items-center gap-5 rounded-lg border p-2 sm:p-4 relative hover:bg-accent-light transition'>
			<Link href={'/library/1'} className='absolute inset-0 ' ></Link>
			<Image
				src={'/images/books/book1.jpg'}
				alt='Book 1'
				width={100}
				className='rounded-lg'
				height={200}
			/>
			<div className='flex-1'>
				<h3 className='vsm:text-lg font-semibold'>
					Преступление и наказание
				</h3>
				<p className='vsm:text-base text-secondary text-xs'>
					Федор Достоевский
				</p>
				<div className='vsm:flex-row vsm:items-center mt-2 flex flex-col gap-2'>
					<p className='text-secondary bg-accent-light rounded-lg px-2 py-1 text-center text-sm'>
						Роман
					</p>
					<p className='text-secondary bg-accent-light rounded-lg px-2 py-1 text-center text-sm'>
						Русская литература
					</p>
				</div>
				<div className='mt-4 flex flex-col-reverse justify-between gap-3 md:flex-row md:items-center'>
					<p className='text-secondary vsm:text-sm text-xs'>
						Добавлена 19 марта 2025
					</p>
					<div className='vsm:flex-row vsm:items-center flex flex-col items-center gap-5 lg:gap-10'>
						<p className='border-secondary flex h-10 w-10 items-center justify-center rounded-full border text-lg font-bold'>
							78
						</p>
						<p className='text-secondary flex items-center gap-2'>
							<MessageCircle size={18} />
							24 отзыва
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

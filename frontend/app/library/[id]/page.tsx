import { getBookById } from '@/shared'
import { BigBook } from '@/widgets'
import { ChevronRight, MoveLeft } from 'lucide-react'
import Link from 'next/link'

const BookPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params
	const book = await getBookById(id)
	return (
		<section className='mx-auto mt-5 px-5'>
			<div className='text-secondary flex flex-wrap items-center gap-4'>
				<Link
					className='group flex items-center gap-1'
					href={'/library'}
				>
					<MoveLeft className='text-black' />
					<span className='transition group-hover:text-black'>
						Каталог
					</span>
				</Link>
				<ChevronRight size={16} />
				<p>{book.title}</p>
			</div>
			<BigBook book={book} />
		</section>
	)
}

export default BookPage

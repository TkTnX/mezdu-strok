import { getBookById } from '@/shared'
import { BigBook } from '@/widgets'
import { ChevronRight, MoveLeft } from 'lucide-react'
import Link from 'next/link'

const BookPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params
	const book = await getBookById(id)
	return (
		<section className='container mt-5'>
			<div className='text-secondary flex items-center gap-4'>
				<Link className='flex items-center gap-1 group' href={'/library'}>
					<MoveLeft className='text-black' />
					<span className='group-hover:text-black transition'>Каталог</span>
				</Link>
				<ChevronRight size={16} />
				<p>{book.title}</p>
            </div>
            <BigBook />
		</section>
	)
}

export default BookPage

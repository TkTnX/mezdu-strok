import { LibraryBook } from '@/entities'
import { getAuthor } from '@/shared'
import Image from 'next/image'

const AuthorPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params
	const author = await getAuthor(id)

	return (
		<section className='vsm:pl-10! flex-1 p-4'>
			<div className='border-accent-light flex gap-3 border-b pb-4'>
				<Image
					src={author.avatar}
					width={300}
					height={300}
					className='h-75 w-75 rounded-full object-cover'
					alt={author.name}
					unoptimized
				/>
				<div>
					<h1 className='text-2xl font-bold sm:text-4xl'>
						{author.name}
					</h1>
					<p className='mt-2'>{author.bio}</p>
				</div>
			</div>
			<div className='mt-5'>
				<p className='text-2xl font-bold'>Книги автора</p>
				<div className='mt-4'>
					{author.books.map(book => (
						<LibraryBook key={book.id} book={{ ...book, author }} />
					))}
				</div>
			</div>
		</section>
	)
}

export default AuthorPage

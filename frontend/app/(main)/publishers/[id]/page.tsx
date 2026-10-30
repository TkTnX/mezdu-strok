import { LibraryBook } from '@/entities'
import { getPublisher } from '@/shared'

const PublisherPage = async ({
	params
}: {
	params: Promise<{ id: string }>
}) => {
	const { id } = await params
	const publisher = await getPublisher(id)
	return (
		<section className='vsm:pl-10! flex-1 p-4'>
			<h1 className='text-2xl font-bold sm:text-4xl '>{publisher.name}</h1>
			<p className='mt-2'>Книги издательства</p>
			<div className='mt-4'>
				{publisher.books.map(book => (
					<LibraryBook book={book} key={book.id} />
				))}
			</div>
		</section>
	)
}

export default PublisherPage

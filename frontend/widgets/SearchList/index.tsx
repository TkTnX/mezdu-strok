import { Author, Book } from '@/entities'
import { IAuthor, IBook, IGenre } from '@/shared'
import Link from 'next/link'

export const SearchList = ({
	data
}: {
	data: { books: IBook[]; authors: IAuthor[]; genres: IGenre[] }
}) => {
	return (
		<div className='mt-10 flex flex-wrap justify-center gap-10 sm:justify-start'>
			{data.books.map(book => (
				<Book className='' key={book.id} book={book} />
			))}
			{data.authors.map(author => (
				<Author author={author} key={author.id} />
			))}
			{data.genres.map(genre => (
				<Link
					href={`/library?genre=${genre.id}`}
					key={genre.id}
					className='hover:bg-main border-main flex h-50 w-50 items-center justify-center rounded-2xl border text-center font-bold transition hover:text-white'
				>
					{genre.name}
				</Link>
			))}
		</div>
	)
}

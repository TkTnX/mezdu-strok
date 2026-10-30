import { Author } from '@/entities'
import { getAuthors } from '@/shared'

const AuthorsPage = async () => {
	const authors = await getAuthors({})
	return (
		<section className='vsm:pl-10! flex-1 p-4'>
			<h1 className='text-2xl font-bold sm:text-4xl'>Авторы книг</h1>
			{authors.length > 0 ? (
				<div className='mt-5 flex flex-wrap items-center gap-4'>
					{authors.map(i => (
						<Author key={i.id} author={i} />
					))}
				</div>
			) : (
				<p className='my-10 text-center text-2xl font-bold'>
					Авторов нет!
				</p>
			)}
		</section>
	)
}

export default AuthorsPage

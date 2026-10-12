import { search } from '@/shared'
import { SearchList } from '@/widgets'

const SearchPage = async ({
	searchParams
}: {
	searchParams: Promise<{ value: string }>
}) => {
	const { value } = await searchParams
	const data = await search(value)
	return (
		<section className='vsm:pl-10! mt-10 flex-1 p-4'>
			<h1 className='text-2xl font-bold md:text-4xl'>
				Результаты поиска по запросу: {value}
			</h1>
			{data.authors.length === 0 &&
			data.books.length === 0 &&
			data.genres.length === 0 ? (
				<p className='mt-40 text-center text-xl font-bold md:text-4xl'>
					Ничего не найдено
				</p>
			) : (
				<SearchList data={data} />
			)}
		</section>
	)
}

export default SearchPage

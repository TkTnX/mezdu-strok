
import { Filters, LibraryList } from '@/widgets'

const LibraryPage = () => {
	return (
		<section className='vsm:pl-10! flex-1 p-4'>
			<div className='flex w-full flex-wrap items-center justify-between gap-4'>
				<h1 className='text-3xl font-bold'>Каталог книг</h1>
			</div>
			<Filters />
			
			<LibraryList />
		</section>
	)
}

export default LibraryPage

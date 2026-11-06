import { Filters, LibraryList } from '@/widgets'
import { Suspense } from 'react'

const LibraryPage = () => {
	return (
		<section className='vsm:pl-10! flex-1 p-4'>
			<div className='flex w-full flex-wrap items-center justify-between gap-4'>
				<h1 className='text-2xl font-bold sm:text-4xl'>Каталог книг</h1>
			</div>
			<Suspense>
				<Filters />
			</Suspense>

			<Suspense>
				<LibraryList />
			</Suspense>
		</section>
	)
}

export default LibraryPage

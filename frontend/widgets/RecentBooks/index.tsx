import { Book } from '@/entities'
import Link from 'next/link'

export const RecentBooks = () => {
	return (
		<section className='mt-8'>
			<div className='flex flex-wrap justify-between gap-3 md:items-center'>
				<h2 className='text-2xl font-bold'>Недавно добавленные</h2>
				<Link
					className='text-main text-lg font-medium transition hover:opacity-80'
					href={'/library'}
				>
					Смотреть все
				</Link>
			</div>
			<div className='mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4'>
				<Book />
				<Book />
				<Book />
				<Book />
			</div>
		</section>
	)
}

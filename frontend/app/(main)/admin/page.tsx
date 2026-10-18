import {
	AdminAside,
	AdminStats,
	RecentAuthors,
	RecentBooks,
	RecentPublishers,
	RecentReviews
} from '@/widgets'

const AdminPage = () => {
	return (
		<div className='vsm:pl-10! flex flex-1 flex-col-reverse items-start gap-5 p-4 lg:flex-row'>
			<div className='flex-1'>
				<AdminStats />
				<RecentReviews className={'flex flex-col'} />
				<RecentBooks className='flex flex-wrap justify-center sm:justify-start' />
				<RecentAuthors className='flex flex-wrap justify-center sm:justify-start' />
				<RecentPublishers className='flex flex-wrap justify-center sm:justify-start' />
			</div>
			<AdminAside />
		</div>
	)
}

export default AdminPage

// TODO: Добавление книги
// TODO: Добавление автора
// TODO: Добавление издательства
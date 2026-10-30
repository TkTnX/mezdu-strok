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
				<RecentReviews isAdmin={true} className={'flex flex-col'} />
				<RecentBooks isAdmin={true} />
				<RecentAuthors isAdmin={true} />
				<RecentPublishers
					isAdmin={true}
					className='flex flex-wrap justify-center sm:justify-start'
				/>
			</div>
			<AdminAside />
		</div>
	)
}

export default AdminPage

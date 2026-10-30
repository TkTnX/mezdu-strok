import { Publisher } from '@/entities'
import { getPublishers } from '@/shared'

const PublishersPage = async () => {
	const publishers = await getPublishers({})
	return (
		<section className='vsm:pl-10! flex-1 p-4'>
			<h1 className='text-2xl font-bold sm:text-4xl'>Издания</h1>
			{publishers.length > 0 ? (
				<div className='mt-5 flex flex-wrap items-center gap-2'>
					{publishers.map(i => (
						<Publisher key={i.id} publisher={i} />
					))}
				</div>
			) : (
				<p className='my-10 text-center text-2xl font-bold'>
					Изданий нет!
				</p>
			)}
		</section>
	)
}

export default PublishersPage

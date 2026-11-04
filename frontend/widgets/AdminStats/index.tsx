'use client'

import { ErrorMessage, Skeleton, useSearch } from '@/shared'
import {
	BookOpenText,
	Building,
	MessageCircleMoreIcon,
	User2Icon
} from 'lucide-react'

export const AdminStats = () => {
	const { useGetStats } = useSearch()
	const { data, isPending, error } = useGetStats()

	if (error) return <ErrorMessage error={error} />
	return (
		<section className='flex flex-wrap gap-3'>
			{isPending ? (
				[...new Array(4)].map((_, index) => <Skeleton key={index} />)
			) : (
				<>
					<div className='border-accent-light flex flex-1 items-start gap-3 rounded-2xl border px-4 py-8'>
						<div className='bg-main/15 flex h-20 w-20 items-center justify-center rounded-full'>
							<BookOpenText size={36} className='text-main' />
						</div>
						<div>
							<p className='text-main'>Книги</p>
							<h4 className='text-4xl font-bold'>{data.books}</h4>
						</div>
					</div>
					<div className='border-accent-light flex flex-1 items-start gap-3 rounded-2xl border px-4 py-8'>
						<div className='bg-main/15 flex h-20 w-20 items-center justify-center rounded-full'>
							<User2Icon size={36} className='text-main' />
						</div>
						<div>
							<p className='text-main'>Авторы</p>
							<h4 className='text-4xl font-bold'>
								{data.authors}
							</h4>
						</div>
					</div>
					<div className='border-accent-light flex flex-1 items-start gap-3 rounded-2xl border px-4 py-8'>
						<div className='bg-main/15 flex h-20 w-20 items-center justify-center rounded-full'>
							<Building size={36} className='text-main' />
						</div>
						<div>
							<p className='text-main'>Издательства</p>
							<h4 className='text-4xl font-bold'>
								{data.publishers}
							</h4>
						</div>
					</div>
					<div className='border-accent-light flex flex-1 items-start gap-3 rounded-2xl border px-4 py-8'>
						<div className='bg-main/15 flex h-20 w-20 items-center justify-center rounded-full'>
							<MessageCircleMoreIcon
								size={36}
								className='text-main'
							/>
						</div>
						<div>
							<p className='text-main'>Рецензии</p>
							<h4 className='text-4xl font-bold'>
								{data.reviews}
							</h4>
						</div>
					</div>
				</>
			)}
		</section>
	)
}

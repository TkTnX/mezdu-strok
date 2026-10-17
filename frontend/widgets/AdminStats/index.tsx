'use client'

import {
	BookOpenText,
	Building,
	MessageCircleMoreIcon,
	User2Icon
} from 'lucide-react'

export const AdminStats = () => {
	return (
		<section className='flex flex-wrap gap-3'>
			<div className='border-accent-light flex flex-1 items-start gap-3 rounded-2xl border px-4 py-8'>
				<div className='bg-main/15 flex h-20 w-20 items-center justify-center rounded-full'>
					<BookOpenText size={36} className='text-main' />
				</div>
				<div>
					<p className='text-main'>Книги</p>
					<h4 className='text-4xl font-bold'>2</h4>
				</div>
			</div>
			<div className='border-accent-light flex flex-1 items-start gap-3 rounded-2xl border px-4 py-8'>
				<div className='bg-main/15 flex h-20 w-20 items-center justify-center rounded-full'>
					<User2Icon size={36} className='text-main' />
				</div>
				<div>
					<p className='text-main'>Авторы</p>
					<h4 className='text-4xl font-bold'>200</h4>
				</div>
			</div>
			<div className='border-accent-light flex flex-1 items-start gap-3 rounded-2xl border px-4 py-8'>
				<div className='bg-main/15 flex h-20 w-20 items-center justify-center rounded-full'>
					<Building size={36} className='text-main' />
				</div>
				<div>
					<p className='text-main'>Издательства</p>
					<h4 className='text-4xl font-bold'>153</h4>
				</div>
			</div>
			<div className='border-accent-light flex flex-1 items-start gap-3 rounded-2xl border px-4 py-8'>
				<div className='bg-main/15 flex h-20 w-20 items-center justify-center rounded-full'>
					<MessageCircleMoreIcon size={36} className='text-main' />
				</div>
				<div>
					<p className='text-main'>Рецензии</p>
					<h4 className='text-4xl font-bold'>67</h4>
				</div>
			</div>
		</section>
	)
}

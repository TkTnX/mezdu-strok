'use client'
import { useAdminStore } from '@/shared/stores'
import { AddBook } from '../AddBook'
import { BookOpenText, Building, ChevronRight, User2Icon } from 'lucide-react'

export const AdminAside = () => {
	const { setOpenAddBook, openAddBook } = useAdminStore()
	return (
		<>
			<aside className='border-accent-light top-10 rounded-2xl border p-4 lg:sticky'>
				<p className='text-main text-xl'>Действия</p>
				<div className='mt-4 flex flex-wrap gap-3 lg:flex-col'>
					<button
						onClick={() => setOpenAddBook(true)}
						className='border-accent-light hover:bg-main/10 flex flex-1 items-center gap-3 rounded-2xl border p-4 transition'
					>
						<div className='bg-main/15 hidden h-10 w-10 items-center justify-center rounded-full lg:flex'>
							<BookOpenText size={18} className='text-main' />
						</div>
						<p className='mr-auto block lg:hidden xl:block'>
							Добавить книгу
						</p>
						<ChevronRight />
					</button>
					<button className='border-accent-light hover:bg-main/10 flex flex-1 items-center gap-3 rounded-2xl border p-4 transition'>
						<div className='bg-main/15 hidden h-10 w-10 items-center justify-center rounded-full lg:flex'>
							<User2Icon size={18} className='text-main' />
						</div>
						<p className='mr-auto block lg:hidden xl:block'>
							Добавить автора
						</p>
						<ChevronRight />
					</button>
					<button className='border-accent-light hover:bg-main/10 flex flex-1 items-center gap-3 rounded-2xl border p-4 transition'>
						<div className='bg-main/15 hidden h-10 w-10 items-center justify-center rounded-full lg:flex'>
							<Building size={18} className='text-main' />
						</div>
						<p className='mr-auto block lg:hidden xl:block'>
							Добавить издательство
						</p>
						<ChevronRight />
					</button>
				</div>
			</aside>
			{openAddBook && <AddBook />}
		</>
	)
}

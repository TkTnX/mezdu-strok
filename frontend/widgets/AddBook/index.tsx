import { AddBookForm } from '@/features'
import { useAdminStore } from '@/shared/stores'
import { X } from 'lucide-react'

export const AddBook = () => {
	const { setOpenAddBook } = useAdminStore()
	return (
		<div className='fixed inset-0 flex flex-col bg-white'>
			<div className='border-accent-light flex shrink-0 items-center justify-between border-b p-4'>
				<h2 className='text-main text-3xl font-bold'>Добавить книгу</h2>
				<button onClick={() => setOpenAddBook(false)}>
					<X className='h-10 w-10' />
				</button>
			</div>
			<div className='flex min-h-0 flex-1 px-4'>
				<div className='flex-1'>q</div>
				<aside className='border-accent-light shrink-0 overflow-y-auto h-full border-l p-4'>
					<AddBookForm />
				</aside>
			</div>
		</div>
	)
}

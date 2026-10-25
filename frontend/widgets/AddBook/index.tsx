import { AddBookForm } from '@/features'
import { useAdminStore } from '@/shared/stores'
import { X } from 'lucide-react'
import Image from 'next/image'

export const AddBook = () => {
	const { setOpenAddBook, bookData } = useAdminStore()
	console.log(bookData.preview)
	return (
		<div className='fixed inset-0 flex flex-col bg-white'>
			<div className='border-accent-light flex shrink-0 items-center justify-between border-b p-4'>
				<h2 className='text-main text-3xl font-bold'>Добавить книгу</h2>
				<button onClick={() => setOpenAddBook(false)}>
					<X className='h-10 w-10' />
				</button>
			</div>
			<div className='flex min-h-0 flex-1 px-4'>
				<div className='flex flex-1 items-center justify-center'>
					<div className='flex max-w-80 flex-col items-center'>
						<div className='relative h-80 w-full max-w-55 min-w-55'>
							{bookData.preview?.[0] ? (
								<Image
									loading='eager'
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									src={URL.createObjectURL(
										bookData.preview[0]
									)}
									alt={bookData.title}
									className='rounded-lg object-cover'
								/>
							) : (
								<div className='bg-accent-light flex h-full w-full items-center justify-center rounded-xl text-center text-2xl'>
									{bookData.title}
								</div>
							)}
						</div>
						<h5 className='mt-3 max-w-55 text-lg font-semibold'>
							{bookData.title}
						</h5>
						<p className='text-secondary text-sm'>
							{bookData.description}
						</p>
						<div className='flex items-center justify-between gap-2'>
							{bookData.year ? <p>{bookData.year}г.</p> : ''}
							{bookData.pages ? (
								<p>{bookData.pages} страниц</p>
							) : (
								''
							)}
						</div>
						<p>{bookData.tags}</p>
					</div>
				</div>
				<aside className='border-accent-light h-full shrink-0 overflow-y-auto border-l p-4'>
					<AddBookForm />
				</aside>
			</div>
		</div>
	)
}

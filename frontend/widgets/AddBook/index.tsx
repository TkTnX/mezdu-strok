import { AddBookForm } from '@/features'
import { useAdminStore } from '@/shared/stores'
import { X } from 'lucide-react'
import Image from 'next/image'

export const AddBook = () => {
	const { setOpenAddBook, bookData } = useAdminStore()

	return (
		<div className='fixed inset-0 z-50 flex flex-col overflow-hidden bg-white'>
			{/* Закреплённая шапка */}
			<div className='border-accent-light flex shrink-0 items-center justify-between border-b p-3 sm:p-4'>
				<h2 className='text-main text-xl font-bold sm:text-3xl'>
					Добавить книгу
				</h2>

				<button
					type='button'
					onClick={() => setOpenAddBook(false)}
					aria-label='Закрыть'
				>
					<X className='h-7 w-7 sm:h-10 sm:w-10' />
				</button>
			</div>

			<div className='flex min-h-0 flex-1 flex-col overflow-y-auto xl:flex-row xl:overflow-hidden'>
				<div className='flex shrink-0 items-center justify-center px-4 py-4 xl:min-h-0 xl:flex-1 xl:py-0'>
					<div className='flex w-full max-w-80 flex-row items-center gap-4 xl:flex-col xl:gap-0'>
						<div className='relative h-28 w-20 shrink-0 sm:h-36 sm:w-24 xl:h-80 xl:w-55'>
							{bookData.preview?.[0] ? (
								<Image
									loading='eager'
									fill
									sizes='(max-width: 1280px) 96px, 220px'
									src={URL.createObjectURL(
										bookData.preview[0]
									)}
									alt={bookData.title || 'Обложка книги'}
									className='rounded-lg object-cover'
								/>
							) : (
								<div className='bg-accent-light flex h-full w-full items-center justify-center rounded-lg p-2 text-center text-sm xl:text-2xl'>
									{bookData.title || 'Обложка книги'}
								</div>
							)}
						</div>

						<div className='min-w-0 xl:flex xl:flex-col xl:items-center'>
							<h5 className='line-clamp-2 text-base font-semibold xl:mt-3 xl:max-w-55 xl:text-lg'>
								{bookData.title || 'Название книги'}
							</h5>

							<p className='text-secondary mt-1 line-clamp-2 text-sm xl:max-w-80 xl:text-center'>
								{bookData.description}
							</p>

							<div className='text-secondary mt-1 flex flex-wrap gap-2 text-xs xl:mt-2 xl:text-sm'>
								{bookData.year ? (
									<span>{bookData.year} г.</span>
								) : null}

								{bookData.pages ? (
									<span>{bookData.pages} страниц</span>
								) : null}
							</div>

							{bookData.tags ? (
								<p className='text-secondary mt-1 line-clamp-1 text-xs xl:mt-2 xl:text-sm'>
									{bookData.tags}
								</p>
							) : null}
						</div>
					</div>
				</div>

				{/* Форма */}
				<aside className='border-accent-light min-h-0 shrink-0 border-t px-4 pt-4 xl:h-full xl:w-115 xl:overflow-y-auto xl:border-t-0 xl:border-l xl:p-4'>
					<AddBookForm />
				</aside>
			</div>
		</div>
	)
}

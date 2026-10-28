import { AddAuthorForm } from '@/features'
import { useAdminStore } from '@/shared/stores'
import { X } from 'lucide-react'
import Image from 'next/image'

export const AddAuthor = () => {
	const { setOpenAddAuthor, authorData } = useAdminStore()

	return (
		<div className='fixed inset-0 z-50 flex flex-col overflow-hidden bg-white'>
			{/* Шапка */}
			<div className='border-accent-light flex shrink-0 items-center justify-between border-b p-3 sm:p-4'>
				<h2 className='text-main text-xl font-bold sm:text-3xl'>
					Добавить автора
				</h2>

				<button
					type='button'
					onClick={() => setOpenAddAuthor(false)}
					aria-label='Закрыть'
				>
					<X className='h-7 w-7 sm:h-10 sm:w-10' />
				</button>
			</div>

			{/* Основная область */}
			<div className='flex min-h-0 flex-1 flex-col overflow-y-auto md:flex-row md:overflow-hidden'>
				{/* Превью автора */}
				<div className='flex shrink-0 items-center justify-center px-4 py-5 md:min-h-0 md:flex-1 md:py-0'>
					<div className='flex w-full max-w-80 flex-row items-center gap-4 md:flex-col md:gap-0'>
						<div className='relative h-24 w-24 shrink-0 sm:h-32 sm:w-32 md:h-50 md:w-50'>
							{authorData.avatar?.[0] ? (
								<Image
									loading='eager'
									fill
									sizes='(max-width: 768px) 128px, 200px'
									src={URL.createObjectURL(
										authorData.avatar[0]
									)}
									alt={authorData.name || 'Аватар автора'}
									className='rounded-full object-cover'
								/>
							) : (
								<div className='bg-accent-light flex h-full w-full items-center justify-center rounded-full p-2 text-center text-base sm:text-xl'>
									{authorData.name || 'Имя автора'}
								</div>
							)}
						</div>

						<div className='min-w-0 md:flex md:flex-col md:items-center'>
							<h5 className='line-clamp-2 text-base font-semibold md:mt-3 md:max-w-55 md:text-lg'>
								{authorData.name || 'Имя автора'}
							</h5>

							<p className='text-secondary mt-1 line-clamp-3 text-sm md:max-w-80 md:text-center'>
								{authorData.bio || 'Биография автора'}
							</p>
						</div>
					</div>
				</div>

				{/* Форма */}
				<aside className='border-accent-light min-h-0 shrink-0 border-t px-4 pt-4 md:h-full md:w-115 md:overflow-y-auto md:border-t-0 md:border-l md:p-4'>
					<AddAuthorForm />
				</aside>
			</div>
		</div>
	)
}

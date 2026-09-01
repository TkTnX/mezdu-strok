import { Button, IBook } from '@/shared'
import { Reviews } from '@/widgets/Reviews'
import { BookAudioIcon } from 'lucide-react'
import Image from 'next/image'

interface Props {
	book: IBook
}

export const BigBook = ({ book }: Props) => {
	return (
		<div className=''>
			<div className='mt-10 flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-end'>
				<div className='vsm:flex-row flex flex-col gap-5 lg:gap-10'>
					{book.preview ? (
						<div className='vsm:h-80 vsm:min-w-50 vsm:mx-0 relative mx-auto h-90 w-60 md:h-100 md:min-w-62.5'>
							<Image
								fill
								src={book.preview}
								alt={book.title}
								className='rounded-xl'
							/>
						</div>
					) : (
						<div className='bg-accent-light flex items-center justify-center rounded-xl text-center text-xl md:text-2xl'>
							{book.title}
						</div>
					)}
					<div className='flex flex-col md:max-w-125'>
						<h3 className='text-2xl font-bold md:text-4xl'>
							{book.title}
						</h3>
						<p className='text-secondary text-sm md:mt-2 md:text-xl'>
							{book.author.name}
						</p>
						<div className='mt-4 flex items-center gap-2'>
							{book.tags.map((tag, i) => (
								<p
									className='text-secondary bg-accent-light rounded-lg px-2 py-1 text-center text-sm'
									key={i}
								>
									{tag}
								</p>
							))}
						</div>
						<div className='my-3 flex flex-1 items-start gap-4 md:mt-8'>
							<div className='flex items-center gap-2'>
								<BookAudioIcon />
								<p className='font-bold'>78</p>
							</div>
							<p className='text-secondary'>
								({book._count.reviews} отзывов)
							</p>
						</div>
						<div className='flex flex-col gap-1 md:mb-10 lg:flex-row lg:gap-5'>
							<Button className={'h-12 flex-1 px-6 py-2 lg:py-0'}>
								Написать рецензию
							</Button>
							<Button
								className={
									'h-12 flex-1 border-black px-6 py-2 text-black lg:py-0'
								}
								variant={'outline'}
							>
								В избранное
							</Button>
						</div>
					</div>
				</div>
				<div className='border-accent-light rounded-xl border px-4 py-3 lg:w-87.5'>
					<p className='font-semibold'>Оценки читателей</p>

					<p className='bg-main mt-6 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold text-white'>
						78
					</p>
					<p className='text-secondary'>
						{book._count.reviews} оценок
					</p>
					<div className='mt-8 grid gap-2'>
						<div className='flex items-center justify-between'>
							<p className='text-sm'>Сюжет / композиция</p>
							<p className='border-main flex h-7 w-7 items-center justify-center rounded-full border font-bold'>
								0
							</p>
						</div>
						<div className='flex items-center justify-between'>
							<p className='text-sm'>Персонажи / психология</p>
							<p className='border-main flex h-7 w-7 items-center justify-center rounded-full border font-bold'>
								0
							</p>
						</div>
						<div className='flex items-center justify-between'>
							<p className='text-sm'>Язык / стиль</p>
							<p className='border-main flex h-7 w-7 items-center justify-center rounded-full border font-bold'>
								0
							</p>
						</div>
						<div className='flex items-center justify-between'>
							<p className='text-sm'>Идея / глубина</p>
							<p className='border-main flex h-7 w-7 items-center justify-center rounded-full border font-bold'>
								0
							</p>
						</div>
						<div className='flex items-center justify-between'>
							<p className='text-sm'>Оригинальность / почерк</p>
							<p className='border-main flex h-7 w-7 items-center justify-center rounded-full border font-bold'>
								0
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='mt-5 flex flex-col items-start gap-5 sm:mt-20 lg:flex-row'>
				<div className='lg:max-w-100 xl:max-w-150'>
					{book.description && (
						<div>
							<h5 className='text-2xl font-bold'>О книге</h5>
							<p className='text-secondary mt-3 text-sm xl:text-base'>
								{book.description}
							</p>
						</div>
					)}
					<p className='mt-5 font-bold'>
						Год издания:{' '}
						<span className='ml-4 font-normal'>{book.year}</span>
					</p>
					<p className='mt-3 font-bold'>
						Издательство:{' '}
						<span className='ml-4 font-normal'>
							{book.publisher.name}
						</span>
					</p>
					<p className='mt-3 font-bold'>
						Страниц:{' '}
						<span className='ml-4 font-normal'>{book.pages}</span>
					</p>
				</div>
				<Reviews />
			</div>
		</div>
	)
}

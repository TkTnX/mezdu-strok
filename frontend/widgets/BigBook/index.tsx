import { Button, IBook} from '@/shared'
import { Reviews } from '@/widgets/Reviews'
import { BookAudioIcon } from 'lucide-react'
import Image from 'next/image'

interface Props {
	book: IBook
}

export const BigBook = ({ book }: Props) => {
	return (
		<div className=''>
			<div className='mt-10 flex w-full items-end justify-between'>
				<div className='flex gap-10'>
					{book.preview ? (
						<Image
							src={book.preview}
							width={250}
							height={400}
							alt={book.title}
							className='rounded-xl'
						/>
					) : (
						<div className='bg-accent-light flex h-100 w-62.5 items-center justify-center rounded-xl text-center text-2xl'>
							{book.title}
						</div>
					)}
					<div className='flex max-w-125 flex-col'>
						<h3 className='text-4xl font-bold'>{book.title}</h3>
						<p className='text-secondary mt-2 text-xl'>
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
						<div className='mt-8 flex flex-1 items-start gap-4'>
							<div className='flex items-center gap-2'>
								<BookAudioIcon />
								<p className='font-bold'>78</p>
							</div>
							<p className='text-secondary'>
								({book._count.reviews} отзывов)
							</p>
						</div>
						<div className='mb-10 flex gap-5'>
							<Button className={'h-12 flex-1 px-6'}>
								Написать рецензию
							</Button>
							<Button
								className={
									'h-12 flex-1 border-black px-6 text-black'
								}
								variant={'outline'}
							>
								В избранное
							</Button>
						</div>
					</div>
				</div>
				<div className='border-accent-light w-87.5 rounded-xl border px-4 py-3'>
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
			<div className='mt-20 flex items-start'>
				<div className='max-w-150'>
					{book.description && (
						<div>
							<h5 className='text-2xl font-bold'>О книге</h5>
							<p className='text-secondary mt-3'>
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

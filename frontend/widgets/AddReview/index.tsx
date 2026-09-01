import { Button } from '@/shared'
import { Check, PenLineIcon } from 'lucide-react'
import Link from 'next/link'

export const AddReview = () => {
	return (
		<div className='flex-1'>
			<div className='bg-accent-light border-secondary flex items-center justify-between rounded-2xl border px-4 py-6'>
				<div className='flex items-center gap-4'>
					<div className='bg-secondary/20 border-secondary w-fit rounded-full border px-2 py-2'>
						<PenLineIcon />
					</div>
					<div>
						<p className='text-main font-bold'>
							Оценить книгу может только участник «Между строк»
						</p>
						<p>
							Чтобы поставить баллы и отправить оценку, нужно
							войти в аккаунт
						</p>
					</div>
				</div>
				<Link
					className='rounded-2xl bg-white px-4 py-2 transition hover:bg-gray-50'
					href={'/login'}
				>
					Войти
				</Link>
			</div>
			<div className='bg-accent-light mt-2 rounded-2xl border p-2'>
				<form>
					<div className='bg-main/20 border-main flex items-center justify-between gap-5 rounded-xl border p-2'>
						<label className='flex-1'>
							<p className='flex items-center justify-between text-sm font-semibold'>
								Сюжет / Композиция <span>1</span>{' '}
							</p>
							<input type='range' className='w-full' />
						</label>
						<label className='flex-1'>
							<p className='flex items-center justify-between text-sm font-semibold'>
								Персонажи / Психология <span>1</span>{' '}
							</p>
							<input type='range' className='w-full' />
						</label>
						<label className='flex-1'>
							<p className='flex items-center justify-between text-sm font-semibold'>
								Язык / Стиль <span>1</span>{' '}
							</p>
							<input type='range' className='w-full' />
						</label>
						<label className='flex-1'>
							<p className='flex items-center justify-between text-sm font-semibold'>
								Идея / Глубина <span>1</span>{' '}
							</p>
							<input type='range' className='w-full' />
						</label>
					</div>
					<div className='border-secondary bg-secondary/30 mt-3 rounded-xl border p-2'>
						<label className='flex-1'>
							<p className='flex items-center justify-between text-sm font-semibold'>
								Оригинальность / Почерк <span>1</span>{' '}
							</p>
							<input type='range' className='w-full' />
						</label>
					</div>
					<input
						type='text'
						className='border-secondary mt-3 w-full rounded-2xl border px-3 py-4'
						placeholder='Заголовок рецензии'
					/>
					<textarea
						placeholder='Текст рецензии (от 300 до 8500 символов)'
						className='border-secondary mt-3 h-40! w-full resize-none rounded-2xl border px-3 py-4 outline-none'
					></textarea>
					<div className='ml-auto flex w-fit items-center gap-3'>
                        <p className='flex text-5xl font-bold'>
                            {/* // TODO: ПРИ 90 ИЗМЕНЯТЬ ЦВЕТ НА ЗОЛОТОЙ  */}
							80{' '}
							<span className='text-secondary text-sm'>/ 90</span>
						</p>
                        <Button
                            disabled={true}
							className={
								'flex h-18 disabled:opacity-50 disabled:pointer-events-none w-18 items-center justify-center rounded-full'
							}
						>
							<Check className='h-9! w-9! ' />
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

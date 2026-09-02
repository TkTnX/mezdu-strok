import { Button } from '@/shared'
import {
	AlignLeft,
	CaseSensitive,
	Check,
	Info,
	PenLineIcon,
	Star
} from 'lucide-react'
import Link from 'next/link'

export const AddReview = () => {
	return (
		<div className='flex-1 w-full lg:w-auto'>
			<div className='border-secondary flex items-center justify-between rounded-2xl border bg-[#f7f5fe] px-4 py-6'>
				<div className='flex items-center gap-4'>
					<div className='bg-main/20 text-main w-fit rounded-full px-2 py-2'>
						<PenLineIcon />
					</div>
					<div>
						<p className='font-bold'>
							Оценить книгу может только участник «Между строк»
						</p>
						<p>
							Чтобы поставить баллы и отправить оценку, нужно
							войти в аккаунт
						</p>
					</div>
				</div>
				<div className='flex items-center gap-4'>
					<div className='bg-secondary h-10 w-px' />
					<Link
						className='bg-main hover:bg-main/80 rounded-xl px-5 py-3 text-white transition'
						href={'/login'}
					>
						Войти
					</Link>
				</div>
			</div>
			<div className='mt-2 rounded-2xl border'>
				<form>
					<div className='border-secondary/40 flex items-center justify-between gap-5 border-b px-4 pt-4 pb-2'>
						<label className='flex-1'>
							<p className='flex items-center justify-between text-xs font-semibold'>
								<span className='flex items-center gap-1'>
									Сюжет / Композиция <Info size={14} />{' '}
								</span>
								<span className='text-main text-base font-bold'>
									1
								</span>{' '}
							</p>
							<input
								type='range'
								className='accent-main mt-3 w-full'
							/>
						</label>
						<div className='bg-secondary/20 h-13 w-px' />
						<label className='flex-1'>
							<p className='flex items-center justify-between text-xs font-semibold'>
								<span className='flex items-center gap-1'>
									Персонажи / Психология <Info size={14} />
								</span>{' '}
								<span className='text-main text-base font-bold'>
									1
								</span>{' '}
							</p>
							<input
								type='range'
								className='accent-main mt-3 w-full'
							/>
						</label>
						<div className='bg-secondary/20 h-13 w-px' />

						<label className='flex-1'>
							<p className='flex items-center justify-between text-xs font-semibold'>
								<span className='flex items-center gap-1'>
									Язык / Стиль <Info size={14} />
								</span>
								<span className='text-main text-base font-bold'>
									1
								</span>{' '}
							</p>
							<input
								type='range'
								className='accent-main mt-3 w-full'
							/>
						</label>
						<div className='bg-secondary/20 h-13 w-px' />

						<label className='flex-1'>
							<p className='flex items-center justify-between text-xs font-semibold'>
								<span className='flex items-center gap-1'>
									Идея / Глубина <Info size={14} />
								</span>
								<span className='text-main text-base font-bold'>
									1
								</span>{' '}
							</p>
							<input
								type='range'
								className='accent-main mt-3 w-full'
							/>
						</label>
					</div>
					<div className='mt-3 px-4'>
						<label className='flex-1'>
							<p className='flex items-center justify-between text-xs font-semibold'>
								<span className='flex items-center gap-1'>
									Оригинальность / Почерк <Info size={14} />
								</span>
								<span className='text-main text-base font-bold'>
									1
								</span>{' '}
							</p>
							<input
								type='range'
								className='accent-main mt-3 w-full'
							/>
						</label>
					</div>
					<div className='text-main mt-3 px-4'>
						<label className='border-secondary/40 focus-within:border-main flex items-center rounded-2xl border px-3'>
							<CaseSensitive />
							<input
								type='text'
								className='placeholder:text-secondary w-full px-3 py-4'
								placeholder='Заголовок рецензии'
							/>
							<span className='text-secondary text-sm'>
								0/100
							</span>
						</label>
						<label className='border-secondary/40 focus-within:border-main relative mt-4 flex items-start rounded-2xl border px-3 py-4'>
							<AlignLeft size={22} />
							<textarea
								placeholder='Текст рецензии (от 300 до 8500 символов)'
								className='placeholder:text-secondary h-40! w-full resize-none px-3 outline-none'
							></textarea>
							<span className='text-secondary absolute right-3 bottom-3 text-sm'>
								0/8500
							</span>
						</label>
					</div>
					<div className='p-4'>
						<div className='border-secondary/40 flex w-full items-center justify-between gap-3 rounded-2xl border bg-[#fbfbfc] p-4'>
							<div className='flex max-w-100 items-center gap-3'>
								<div className='bg-main/20 text-main w-fit rounded-full px-2 py-2'>
									<Star size={36} />
								</div>
								<div>
									<p className='text-sm font-bold'>
										Максимум - 90 баллов
									</p>
									<p className='text-secondary mt-1 text-xs'>
										Бальная оценка формируется на основе
										ваших оценок по критериям и общего
										впечатления от книги.
									</p>
								</div>
							</div>
							<div className='flex items-center gap-3'>
								<div className='flex flex-col items-end justify-end'>
									<p className='flex text-5xl font-bold'>
										{/* // TODO: ПРИ 90 ИЗМЕНЯТЬ ЦВЕТ НА ЗОЛОТОЙ  */}
										80{' '}
										<span className='text-secondary text-sm'>
											/ 90
										</span>
									</p>
									<button className='text-main border-main border-b border-dashed text-sm'>
										Как считается оценка?
									</button>
								</div>
								<Button
									disabled={true}
									className={
										'flex h-18 w-18 items-center justify-center rounded-full disabled:pointer-events-none disabled:opacity-50'
									}
								>
									<Check className='h-9! w-9!' />
								</Button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

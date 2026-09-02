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
		<div className='w-full flex-1 lg:w-auto'>
			<div className='border-secondary flex flex-col items-center justify-between gap-2 rounded-2xl border bg-[#f7f5fe] px-4 py-6 vsm:flex-row'>
				<div className='flex flex-col vsm:flex-row items-start gap-4 vsm:items-center'>
					<div className='bg-main/20 text-main w-fit rounded-full px-2 py-2'>
						<PenLineIcon />
					</div>
					<div>
						<p className='text-sm font-bold md:text-base'>
							Оценить книгу может только участник «Между строк»
						</p>
						<p className='text-xs md:text-base'>
							Чтобы поставить баллы и отправить оценку, нужно
							войти в аккаунт
						</p>
					</div>
				</div>
				<div className='vsm:w-fit flex w-full gap-4 vsm:items-center'>
					<div className='bg-secondary vsm:block hidden h-10 w-px' />
					<Link
						className='bg-main hover:bg-main/80 block w-full rounded-xl px-5 py-3 text-center text-white transition'
						href={'/login'}
					>
						Войти
					</Link>
				</div>
			</div>
			<div className='mt-2 rounded-2xl border'>
				<form>
					<div className='border-secondary/40 items-center justify-between gap-5 border-b px-4 pt-4 pb-2 sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4'>
						<div className='flex w-full items-center gap-5'>
							<label className='flex-1'>
								<p className='flex items-center justify-between gap-2 text-xs font-semibold'>
									<span className='flex items-center gap-1'>
										Сюжет / Композиция{' '}
										<Info
											size={14}
											className='min-w-3.5'
										/>{' '}
									</span>
									<span className='text-main text-base font-bold'>
										1
									</span>{' '}
								</p>
								<input
									type='range'
									className='accent-main w-full sm:mt-3'
								/>
							</label>
							<div className='bg-secondary/20 hidden h-13 w-px sm:block' />
						</div>
						<div className='flex w-full items-center gap-5'>
							<label className='flex-1'>
								<p className='flex items-center justify-between gap-2 text-xs font-semibold'>
									<span className='flex items-center gap-1'>
										Персонажи / Психология{' '}
										<Info size={14} className='min-w-3.5' />
									</span>{' '}
									<span className='text-main text-base font-bold'>
										1
									</span>{' '}
								</p>
								<input
									type='range'
									className='accent-main w-full sm:mt-3'
								/>
							</label>
							<div className='bg-secondary/20 hidden h-13 w-px md:block lg:hidden xl:block' />
						</div>

						<div className='flex w-full items-center gap-5'>
							<label className='flex-1'>
								<p className='flex items-center justify-between gap-2 text-xs font-semibold'>
									<span className='flex items-center gap-1'>
										Язык / Стиль{' '}
										<Info size={14} className='min-w-3.5' />
									</span>
									<span className='text-main text-base font-bold'>
										1
									</span>{' '}
								</p>
								<input
									type='range'
									className='accent-main w-full sm:mt-3'
								/>
							</label>
							<div className='bg-secondary/20 hidden h-13 w-px sm:block' />
						</div>

						<label className='flex-1'>
							<p className='flex items-center justify-between gap-2 text-xs font-semibold'>
								<span className='flex items-center gap-1'>
									Идея / Глубина{' '}
									<Info size={14} className='min-w-3.5' />
								</span>
								<span className='text-main text-base font-bold'>
									1
								</span>{' '}
							</p>
							<input
								type='range'
								className='accent-main w-full sm:mt-3'
							/>
						</label>
					</div>
					<div className='mt-3 px-4'>
						<label className='flex-1'>
							<p className='flex items-center justify-between gap-2 text-xs font-semibold'>
								<span className='flex items-center gap-1'>
									Оригинальность / Почерк{' '}
									<Info size={14} className='min-w-3.5' />
								</span>
								<span className='text-main text-base font-bold'>
									1
								</span>{' '}
							</p>
							<input
								type='range'
								className='accent-main w-full sm:mt-3'
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
						<div className='border-secondary/40 flex w-full flex-col items-center justify-between gap-5 rounded-2xl border bg-[#fbfbfc] p-4 md:flex-row md:gap-0 xl:gap-3'>
							<div className='flex flex-col vsm:flex-row items-start gap-3 md:max-w-80 xl:max-w-100 xl:items-center'>
								<div className='bg-main/20 text-main  w-fit rounded-full px-2 py-2'>
									<Star className='min-h-7 min-w-7 xl:min-h-9 xl:min-w-9' />
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
							<div className='flex w-full items-center justify-between gap-3 md:w-fit md:justify-center'>
								<div className='vsm:items-end flex flex-col justify-between md:justify-end'>
									<p className='flex text-5xl font-bold'>
										{/* // TODO: ПРИ 90 ИЗМЕНЯТЬ ЦВЕТ НА ЗОЛОТОЙ  */}
										80{' '}
										<span className='text-secondary text-sm'>
											/ 90
										</span>
									</p>
									{/* TODO: Сделать */}
									<button className='text-main text-nowrap border-main border-b border-dashed text-xs'>
										Как считается оценка?
									</button>
								</div>
								<Button
									disabled={true}
									className={
										'flex h-14 w-14 items-center justify-center rounded-full disabled:pointer-events-none disabled:opacity-50 xl:h-18 xl:w-18'
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

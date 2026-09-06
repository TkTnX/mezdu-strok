import { Button, cn } from '@/shared'
import { Check, Star } from 'lucide-react'

interface Props {
	rating: number
	isPending: boolean
}

export const AddReviewConfirm = ({ rating, isPending }: Props) => {
	return (
		<div className='p-4'>
			<div className='border-secondary/40 flex w-full flex-col items-center justify-between gap-5 rounded-2xl border bg-[#fbfbfc] p-4 md:flex-row md:gap-0 xl:gap-3'>
				<div className='vsm:flex-row flex flex-col items-start gap-3 md:max-w-80 xl:max-w-100 xl:items-center'>
					<div className='bg-main/20 text-main w-fit rounded-full px-2 py-2'>
						<Star className='min-h-7 min-w-7 xl:min-h-9 xl:min-w-9' />
					</div>
					<div>
						<p className='text-sm font-bold'>
							Максимум - 90 баллов
						</p>
						<p className='text-secondary mt-1 text-xs'>
							Бальная оценка формируется на основе ваших оценок по
							критериям и общего впечатления от книги.
						</p>
					</div>
				</div>
				<div className='flex w-full items-center justify-between gap-3 md:w-fit md:justify-center'>
					<div className='vsm:items-end flex flex-col justify-between md:justify-end'>
						<p
							className={`flex text-5xl font-bold transition ${rating == 90 ? 'text-[#e9ba12]' : ''}`}
						>
							{Math.ceil(rating)}{' '}
							<span className='text-secondary text-sm'>/ 90</span>
						</p>
						{/* TODO: Сделать */}
						<button className='text-main border-main border-b border-dashed text-xs text-nowrap'>
							Как считается оценка?
						</button>
					</div>
					<Button
						type='submit'
						disabled={isPending}
						className={cn(
							'flex h-14 w-14 items-center justify-center rounded-full disabled:pointer-events-none disabled:opacity-50 xl:h-18 xl:w-18',
							{
								'bg-[#e9ba12]': rating == 90
							}
						)}
					>
						<Check className='h-9! w-9!' />
					</Button>
				</div>
			</div>
		</div>
	)
}

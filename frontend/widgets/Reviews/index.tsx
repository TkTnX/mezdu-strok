import { Review } from '@/entities'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared'

export const Reviews = () => {
	return (
		<div className='mx-auto mt-5 max-w-285 rounded-xl'>
			<div className='flex flex-col justify-between gap-3 sm:flex-row sm:items-center'>
				<p className='text-4xl font-semibold sm:text-2xl'>Рецензии</p>
				<label className='flex cursor-pointer flex-wrap items-center gap-3'>
					<span className='font-semibold'>Сортировать по:</span>{' '}
					<Select>
						<SelectTrigger
							className={
								'bg-accent-light vsm:flex-none vsm:w-60 flex-1'
							}
						>
							<SelectValue placeholder='Новые' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem
								className={'cursor-pointer'}
								value='Старые'
							>
								Старые
							</SelectItem>
							<SelectItem
								className={'cursor-pointer'}
								value='Новые'
							>
								Новые
							</SelectItem>
							<SelectItem
								className={'cursor-pointer'}
								value='Выше оценка'
							>
								Выше оценка
							</SelectItem>
							<SelectItem
								className={'cursor-pointer'}
								value='Ниже оценка'
							>
								Ниже оценка
							</SelectItem>
						</SelectContent>
					</Select>
				</label>
			</div>
			<div className='mx-auto mt-10 max-w-200'>
				<Review />
			</div>
		</div>
	)
}

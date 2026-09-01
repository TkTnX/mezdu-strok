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
		<div className='lg:w-87.5 mx-auto lg:mx-0 flex-1 rounded-xl'>
			<div className='flex flex-col sm:flex-row gap-3 sm:items-center justify-between'>
				<p className='text-4xl sm:text-2xl font-semibold'>Рецензии</p>
				<label className='flex flex-wrap cursor-pointer items-center gap-3'>
					<span className='font-semibold'>Сортировать по:</span>{' '}
					<Select>
						<SelectTrigger className={'bg-accent-light flex-1 vsm:flex-none vsm:w-60'}>
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
            <div className='max-w-200 mx-auto mt-10'>
                <Review />
            </div>
		</div>
	)
}

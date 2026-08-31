import {
	Button,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared'
import { Filters, LibraryList } from '@/widgets'

const LibraryPage = () => {
	return (
		<section className='vsm:pl-10! container flex-1 py-4'>
			<div className='flex w-full flex-wrap items-center justify-between gap-4'>
				<h1 className='text-3xl font-bold'>Каталог книг</h1>
				<Button variant={'outline'} className='h-10'>
					Добавить рецензию
				</Button>
			</div>
			<Filters />
			<div className='text-secondary mt-5 flex flex-wrap items-center justify-between gap-2 md:gap-3'>
				<p>Найдено: 124 книги</p>
				<label className='flex w-full cursor-pointer flex-col sm:w-fit sm:flex-row sm:items-center'>
					<span className='hidden sm:inline'>Сортировка:</span>{' '}
					<Select>
						<SelectTrigger
							className={'w-full sm:w-fit sm:border-none'}
						>
							<SelectValue
								className={'text-base'}
								placeholder='По дате добавления'
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='Сначала старые'>
								Сначала старые
							</SelectItem>
							<SelectItem value='Сначала новые'>
								Сначала новые
							</SelectItem>
							<SelectItem value='По оценке (низкая)'>
								По оценке (низкая)
							</SelectItem>
							<SelectItem value='По оценки (высокая)'>
								По оценке (высокая)
							</SelectItem>
						</SelectContent>
					</Select>
				</label>
			</div>
			<LibraryList />
		</section>
	)
}

export default LibraryPage

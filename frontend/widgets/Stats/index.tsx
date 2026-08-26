export const Stats = () => {
	return (
		<div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
			<div className='border-accent-light flex flex-col items-center justify-center rounded-xl border p-5 sm:items-start lg:p-10'>
				<h4 className='text-4xl font-bold'>28</h4>
				<p className='mt-3 font-medium'>Прочитано книг</p>
			</div>
			<div className='border-accent-light flex flex-col items-center justify-center rounded-xl border p-5 sm:items-start lg:p-10'>
				<h4 className='text-4xl font-bold'>12</h4>
				<p className='mt-3 font-medium'>Отзывов написано</p>
			</div>
			<div className='border-accent-light flex flex-col items-center justify-center rounded-xl border p-5 sm:items-start lg:p-10'>
				<h4 className='text-4xl font-bold'>7</h4>
				<p className='mt-3 font-medium'>Любимых авторов</p>
			</div>
			<div className='border-accent-light flex flex-col items-center justify-center rounded-xl border p-5 sm:items-start lg:p-10'>
				<h4 className='text-4xl font-bold'>78</h4>
				<p className='mt-3 font-medium'>Средняя оценка</p>
			</div>
		</div>
	)
}

import { Button } from '@/shared'
import { RecentBooks, RecentReviews, Stats } from '@/widgets'

export default function Home() {
	return (
		<section className='vsm:pl-10! container flex-1 py-4'>
			<div className='flex w-full flex-wrap items-center justify-between gap-4'>
				<h1 className='text-3xl font-bold'>Добрый день, Тимур! 👋</h1>
				<Button variant={'outline'} className='h-10'>
					Добавить рецензию
				</Button>
			</div>
			<Stats />
			<RecentBooks />
			<RecentReviews />
		</section>
	)
}

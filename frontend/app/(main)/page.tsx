import { Button, Hello } from '@/shared'
import { RecentBooks, RecentReviews, Stats } from '@/widgets'

export default function Home() {
	return (
		<section className='vsm:pl-10! flex-1 p-4'>
			<div className='flex w-full flex-wrap items-center justify-between gap-4'>
				<Hello />
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

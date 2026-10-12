import {  Hello } from '@/shared'
import { RecentBooks, RecentReviews, Stats } from '@/widgets'
import Link from 'next/link'

export default function Home() {
	return (
		<section className='vsm:pl-10! flex-1 p-4'>
			<div className='flex w-full flex-wrap items-center justify-between gap-4'>
				<Hello />
				<Link
					href={'/library'}
					className='border-main text-main hover:bg-main flex h-10 items-center justify-center rounded-lg border px-4 transition hover:text-white'
				>
					Добавить рецензию
				</Link>
			</div>
			<Stats />
			<RecentBooks />
			<RecentReviews />
		</section>
	)
}

'use client'
import { cn, Skeleton } from '@/shared'
import { useUserStore } from '@/shared/stores'
import { Info } from 'lucide-react'
import Link from 'next/link'

interface Props {
	isSmall?: boolean
}

export const Stats = ({ isSmall = false }: Props) => {
	const { user, isPending } = useUserStore()

	if (isPending) return <Skeleton className='mt-10 h-50 w-full' />

	if (!user)
		return (
			<div className='border-main vsm:flex-row mt-10 flex flex-col items-center justify-between gap-2 rounded-2xl border bg-[#f7f5fe] px-4 py-6'>
				<div className='vsm:flex-row vsm:items-center flex flex-col items-start gap-4'>
					<Info className='text-main' />
					<p className='text-main text-xs md:text-base'>
						Чтобы увидеть статистику, войдите в аккаунт
					</p>
				</div>
				<div className='vsm:w-fit vsm:items-center flex w-full gap-4'>
					<div className='bg-secondary vsm:block hidden h-10 w-px' />
					<Link
						className='bg-main hover:bg-main/80 block w-full rounded-xl px-5 py-3 text-center text-white transition'
						href={'/auth/login'}
					>
						Войти
					</Link>
				</div>
			</div>
		)
	return (
		<div
			className={cn('mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4', {
				'grid-cols-2': isSmall
			})}
		>
			<div
				className={cn(
					'flex flex-col items-center justify-center sm:items-start',
					{
						'border-accent-light rounded-xl border p-5 lg:p-10':
							!isSmall
					}
				)}
			>
				<h4 className='text-4xl font-bold'>{user?._count.favorites}</h4>
				<p className='mt-3 font-medium'>Любимых книг</p>
			</div>
			<div
				className={cn(
					'flex flex-col items-center justify-center sm:items-start',
					{
						'border-accent-light rounded-xl border p-5 lg:p-10':
							!isSmall
					}
				)}
			>
				<h4 className='text-4xl font-bold'>{user?._count.reviews}</h4>
				<p className='mt-3 font-medium'>Отзывов написано</p>
			</div>
			<div
				className={cn(
					'flex flex-col items-center justify-center sm:items-start',
					{
						'border-accent-light rounded-xl border p-5 lg:p-10':
							!isSmall
					}
				)}
			>
				<h4 className='text-4xl font-bold'>{user?._count.favorites}</h4>
				{/* TODO: Добавить лайки авторов */}
				<p className='mt-3 font-medium'>Любимых авторов</p>
			</div>
			<div
				className={cn(
					'flex flex-col items-center justify-center sm:items-start',
					{
						'border-accent-light rounded-xl border p-5 lg:p-10':
							!isSmall
					}
				)}
			>
				<h4 className='text-4xl font-bold'>
					{user._count.reviews
						? Math.ceil(
								user.reviews!.reduce(
									(acc, review) => acc + review.rating,
									0
								) / user._count.reviews
							)
						: 0}
				</h4>
				<p className='mt-3 font-medium'>Средняя оценка</p>
			</div>
		</div>
	)
}

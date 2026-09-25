'use client'
import { cn, EditProfile, Skeleton } from '@/shared'
import { useUserStore } from '@/shared/stores'
import { Favorites, Stats, Reviews, Quotes } from '@/widgets'
import { UserCircle2Icon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const Profile = () => {
	const [open, setOpen] = useState(false)
	const [selectedTab, setSelectedTab] = useState(0)
	const router = useRouter()
	const { user, isPending } = useUserStore()
	if (!user && !isPending) return router.push('/auth/login')
	return (
		<section className='container mt-10'>
			<div className='flex flex-col items-center justify-between gap-10 sm:items-stretch lg:flex-row lg:items-start'>
				<div className='relative h-50 w-50'>
					{isPending ? (
						<Skeleton className='h-full w-full rounded-full' />
					) : user?.avatar ? (
						<Image
							className='rounded-full'
							src={user.avatar}
							alt={user.username}
							fill
						/>
					) : (
						<UserCircle2Icon className='text-main h-50 w-50' />
					)}
				</div>
				<div className='flex-1'>
					{isPending ? (
						<Skeleton className='h-50 w-full' />
					) : (
						<div>
							<h1 className='text-4xl font-bold xl:text-5xl'>
								{user?.firstname + ' ' + user?.lastname}
							</h1>
							<p className='text-secondary mt-2 text-xl xl:text-2xl'>
								@{user?.username}
							</p>
							<p className='mt-2 text-lg xl:text-xl'>
								{user?.bio ? user?.bio : 'Нет описания'}
							</p>
							<Stats isSmall={true} />
						</div>
					)}
				</div>
				<EditProfile open={open} setOpen={setOpen} user={user} />
			</div>
			<div className='border-accent-light mt-10 border-b'>
				<ul className='flex items-center overflow-x-auto'>
					<li>
						<button
							onClick={() => setSelectedTab(0)}
							className={cn(
								'border-b-3 border-transparent px-3 py-5 font-semibold md:w-40 md:px-0',
								selectedTab === 0 && 'text-main border-main'
							)}
						>
							Рецензии
						</button>
					</li>
					<li>
						<button
							onClick={() => setSelectedTab(1)}
							className={cn(
								'border-b-3 border-transparent px-3 py-5 font-semibold md:w-40 md:px-0',
								selectedTab === 1 && 'text-main border-main'
							)}
						>
							Цитаты
						</button>
					</li>
					<li>
						<button
							onClick={() => setSelectedTab(2)}
							className={cn(
								'border-b-3 border-transparent px-3 py-5 font-semibold md:w-40 md:px-0',
								selectedTab === 2 && 'text-main border-main'
							)}
						>
							Избранное
						</button>
					</li>
				</ul>
			</div>
			{user &&
				(selectedTab === 0 ? (
					<Reviews userId={user.id} />
				) : selectedTab === 1 ? (
					<Quotes userId={user.id} />
				) : (
					<Favorites />
				))}
		</section>
	)
}

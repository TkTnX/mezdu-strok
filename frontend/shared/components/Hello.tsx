'use client'

import { Skeleton } from '@/shared/components/ui'
import { useUserStore } from '@/shared/stores'
import { ERole } from '@/shared/types'
import Link from 'next/link'

export const Hello = () => {
	const { user, isPending } = useUserStore()
	if ((!isPending && !user) || !user?.firstname)
		return (
			<h1 className='flex items-center gap-3 text-3xl font-bold'>
				Добро пожаловать!
			</h1>
		)
	return (
		<>
			<h1 className='flex items-center gap-3 text-3xl font-bold'>
				Добрый день,{' '}
				{isPending || !user ? (
					<Skeleton className='h-10 w-20' />
				) : (
					user?.firstname
				)}
				! 👋
			</h1>
			{user.role === ERole.ADMIN && (
				<Link
					href={'/admin'}
					className='border-main text-main hover:bg-main ml-auto flex h-10 items-center justify-center rounded-lg border px-4 transition hover:text-white'
				>
					Админ-панель
				</Link>
			)}
		</>
	)
}

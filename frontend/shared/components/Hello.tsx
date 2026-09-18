'use client'

import { Skeleton } from '@/shared/components/ui'
import { useUserStore } from '@/shared/stores'

export const Hello = () => {
	const { user, isPending } = useUserStore()
	if ((!isPending && !user) || !user?.firstname)
		return (
			<h1 className='flex items-center gap-3 text-3xl font-bold'>
				Добро пожаловать!
			</h1>
		)
	return (
		<h1 className='flex items-center gap-3 text-3xl font-bold'>
			Добрый день,{' '}
			{isPending || !user ? (
				<Skeleton className='h-10 w-20' />
			) : (
				user?.firstname
			)}
			! 👋
		</h1>
	)
}

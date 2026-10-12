'use client'
import { Search } from '@/features'
import { getMe } from '@/shared'
import { useUserStore } from '@/shared/stores'
import { Bell, SearchIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
export const Header = () => {
	const [openSearch, setOpenSearch] = useState(false)
	const { user, setUser, setIsPending } = useUserStore()

	useEffect(() => {
		if (user) return

		async function getMeFunc() {
			setIsPending(true)
			const user = await getMe()

			setIsPending(false)
			setUser(user)
		}

		getMeFunc()
	}, [setIsPending, setUser, user])
	return (
		<header className='border-border relative w-full border-b'>
			<div className='flex h-15 w-full items-center justify-between gap-4 px-4'>
				<Link className='text-2xl font-bold' href={'/'}>
					Между строк
				</Link>
				<Search />
				<div className='flex items-center gap-2 sm:gap-8'>
					<button
						onClick={() => setOpenSearch(true)}
						className='block sm:hidden'
					>
						<SearchIcon />
					</button>
					<Bell />
					{user ? (
						<Link href={'/profile'}>
							<UserIcon />
						</Link>
					) : (
						<Link href={'/auth/login'}>
							<UserIcon />
						</Link>
					)}
				</div>
			</div>
			{openSearch && (
				<Search
					className={
						'absolute top-0 right-0 left-0 flex h-full rounded-none'
					}
					open={openSearch}
					setOpen={setOpenSearch}
				/>
			)}
		</header>
	)
}

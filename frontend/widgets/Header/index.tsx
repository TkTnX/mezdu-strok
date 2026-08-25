import { Bell, SearchIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'

export const Header = () => {
	return (
		<header className='border-border w-full border-b'>
			<div className='flex h-15 w-full items-center justify-between gap-4 container'>
				<Link className='text-2xl font-bold' href={'/'}>
					Между строк
				</Link>
				<form className='bg-accent-light hidden max-w-112.5 flex-1 items-center gap-2 rounded-full p-2 sm:flex'>
					<SearchIcon size={16} />
					<input
						className='flex-1'
						type='text'
						placeholder='Поиск по книгам, авторам, жанрам...'
					/>
				</form>
				<div className='flex items-center gap-2 sm:gap-8'>
					<SearchIcon className='block sm:hidden' />
					<Bell />
					<UserIcon />
				</div>
			</div>
		</header>
	)
}

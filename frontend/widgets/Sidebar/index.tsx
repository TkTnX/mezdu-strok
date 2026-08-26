'use client'
import { cn, NAV_ITEMS } from '@/shared'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Sidebar = () => {
	const pathname = usePathname()
	return (
		<div className='border-border hidden vsm:flex h-[100vh-60px] max-w-50 flex-col gap-4 border-r p-4 sm:flex-1 lg:max-w-62.5'>
			{NAV_ITEMS.map(item => (
				<Link
					className={cn(
						'hover:bg-main/20 flex items-center gap-3 rounded-lg p-2 transition',
						{
							'text-main bg-main/20': pathname === item.href
						}
					)}
					href={item.href}
					key={item.href}
				>
					{item.icon}
					<span className='hidden sm:inline'>{item.label}</span>
				</Link>
			))}
		</div>
	)
}

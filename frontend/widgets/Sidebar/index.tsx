'use client'
import { cn, NAV_ITEMS } from '@/shared'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Sidebar = () => {
	const pathname = usePathname()
	return (
		<div className='border-border vsm:block hidden h-[100vh-60px] max-w-50 border-r p-4 sm:flex-1 lg:max-w-62.5'>
			<ul className='vsm:flex sticky top-5 flex-col gap-4'>
				{NAV_ITEMS.map(item => (
					<li key={item.href}>
						<Link
							className={cn(
								'hover:bg-main/20 flex items-center gap-3 rounded-lg p-2 transition',
								{
									'text-main bg-main/20':
										pathname === item.href
								}
							)}
							href={item.href}
						>
							{item.icon}
							<span className='hidden sm:inline'>
								{item.label}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

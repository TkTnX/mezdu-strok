import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header, Sidebar } from '@/widgets'
import { Providers } from '@/shared'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Между строк | Пиши, читай, изучай',
	description: 'Между строк - сервис для написания рецензий на книги'
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			suppressHydrationWarning={true}
			lang='ru'
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<Providers>
				<body className='flex min-h-full flex-col'>
					<Header />
					<main className='flex flex-1'>
						<Sidebar />
						{children}
					</main>
				</body>
			</Providers>
		</html>
	)
}

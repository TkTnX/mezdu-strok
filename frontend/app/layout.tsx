import type { Metadata } from 'next'
import { Cormorant_Garamond, Geist } from 'next/font/google'
import './globals.css'
import { Header } from '@/widgets'
import { Providers } from '@/shared'
import { ToastContainer } from 'react-toastify'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
})

const cormorantGaramond = Cormorant_Garamond({
	variable: '--font-cormorant-garamond',
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
			className={`${geistSans.variable} ${cormorantGaramond.variable} h-full antialiased`}
		>
			<Providers>
				<body className='flex min-h-full flex-col'>
					<Header />
					<main className='flex flex-1'>{children}</main>
					<ToastContainer />
				</body>
			</Providers>
		</html>
	)
}

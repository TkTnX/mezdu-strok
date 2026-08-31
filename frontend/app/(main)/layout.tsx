import { Sidebar } from '@/widgets'

export default function MainLayout({ children }: LayoutProps<'/'>) {
	return (
		<>
			<main className='flex flex-1'>
				<Sidebar />
				{children}
			</main>
		</>
	)
}
